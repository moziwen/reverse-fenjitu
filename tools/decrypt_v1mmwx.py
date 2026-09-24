#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V1MMWX 解密（PC 微信小程序加密缓存包 → 原始 wxapkg）。

用法: python tools/decrypt_v1mmwx.py <加密包.wxapkg> <输出.wxapkg> <appid>
原理（公开资料，已在本机验证）:
  - 文件头 6 字节 = b"V1MMWX"
  - key = PBKDF2-HMAC-SHA1(passphrase=appid, salt=b"saltiest", 1000 轮, 32 字节)
  - iv  = b"the iv: 16 bytes"
  - 前 1023 字节 = AES-256-CBC 解密头部（取 1024 字节解密结果的前 1023）
  - 之后所有字节 = 原文 XOR (appid 倒数第 2 个字符的 ord)
  - 校验: 结果 data[0]==0xBE 且 data[13]==0xED
"""
import sys, hashlib, struct
from Crypto.Cipher import AES

SALT = b'saltiest'
IV = b'the iv: 16 bytes'


def decrypt(data: bytes, appid: str) -> bytes:
    assert data[:6] == b'V1MMWX', 'not V1MMWX encrypted: %r' % data[:6]
    key = hashlib.pbkdf2_hmac('sha1', appid.encode(), SALT, 1000, 32)
    head = AES.new(key, AES.MODE_CBC, IV).decrypt(data[6:6 + 1024])[:1023]
    xor_key = ord(appid[-2]) if len(appid) >= 2 else 0x66
    body = bytes(b ^ xor_key for b in data[6 + 1024:])
    return head + body


def unpack(data: bytes, out_dir: str):
    assert data[0] == 0xBE and data[13] == 0xED, 'bad magic: %02x %02x' % (data[0], data[13])
    u32 = lambda off: struct.unpack_from('>I', data, off)[0]
    idx, files = 14, []
    n = u32(idx); idx += 4
    for _ in range(n):
        nl = u32(idx); idx += 4
        name = data[idx:idx + nl].decode('utf-8'); idx += nl
        off, size = u32(idx), u32(idx + 4); idx += 8
        files.append((name, off, size))
    import os
    for name, off, size in files:
        dest = os.path.join(out_dir, name.lstrip('/').replace('/', os.sep))
        os.makedirs(os.path.dirname(dest) or out_dir, exist_ok=True)
        open(dest, 'wb').write(data[off:off + size])
    print('unpacked %d files -> %s' % (len(files), out_dir))
    return files


def main():
    src, dst, appid = sys.argv[1], sys.argv[2], sys.argv[3]
    raw = open(src, 'rb').read()
    plain = decrypt(raw, appid)
    print('decrypted magic:', plain[:2].hex(), 'size:', len(plain))
    unpack(plain, dst)


if __name__ == '__main__':
    main()
