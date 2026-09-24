# 解包静态清单（由 tools/extract_inventory.py 自动生成）

## 页面 ↔ chunk 对照

| 页面 | webview | appservice |
|---|---|---|
| pages/audio | chunk_28.webview.js | chunk_28.appservice.js |
| pages/card | chunk_27.webview.js | chunk_27.appservice.js |
| pages/cardQuiz | chunk_29.webview.js | chunk_29.appservice.js |
| pages/cardTest | chunk_30.webview.js | chunk_30.appservice.js |
| pages/class | chunk_31.webview.js | chunk_31.appservice.js |
| pages/daka | chunk_32.webview.js | chunk_32.appservice.js |
| pages/group | chunk_25.webview.js | chunk_25.appservice.js |
| pages/help | chunk_33.webview.js | chunk_33.appservice.js |
| pages/index | chunk_0.webview.js | chunk_0.appservice.js |
| pages/jigou | chunk_22.webview.js | chunk_22.appservice.js |
| pages/listen | chunk_34.webview.js | chunk_34.appservice.js |
| pages/member | chunk_35.webview.js | chunk_35.appservice.js |
| pages/more | chunk_8.webview.js | chunk_8.appservice.js |
| pages/planCreate | chunk_17.webview.js | chunk_17.appservice.js |
| pages/planDetail | chunk_36.webview.js | chunk_36.appservice.js |
| pages/planList | chunk_37.webview.js | chunk_37.appservice.js |
| pages/report | chunk_38.webview.js | chunk_38.appservice.js |
| pages/school | chunk_39.webview.js | chunk_39.appservice.js |
| pages/search | chunk_40.webview.js | chunk_40.appservice.js |
| pages/set | chunk_41.webview.js | chunk_41.appservice.js |
| pages/share | chunk_42.webview.js | chunk_42.appservice.js |
| pages/unit | chunk_43.webview.js | chunk_43.appservice.js |
| pages/unitQuiz | chunk_44.webview.js | chunk_44.appservice.js |
| pages/unitStudy | chunk_45.webview.js | chunk_45.appservice.js |
| pages/vip | chunk_46.webview.js | chunk_46.appservice.js |
| pages/word | chunk_47.webview.js | chunk_47.appservice.js |
| pages/wordExt | chunk_48.webview.js | chunk_48.appservice.js |

## 组件 ↔ chunk 对照

| 组件 wxml | webview chunk |
|---|---|
| ./components/privacyPopup/privacyPopup.wxml | chunk_0.webview.js |
| ./components/tui-bottom-popup/tui-bottom-popup.wxml | chunk_1.webview.js |
| ./components/tui-button/tui-button.wxml | chunk_2.webview.js |
| ./components/tui-calendar/tui-calendar.wxml | chunk_2.webview.js |
| ./components/tui-charts-column/tui-charts-column.wxml | chunk_3.webview.js |
| ./components/tui-charts-line/tui-charts-line.wxml | chunk_4.webview.js |
| ./components/tui-charts-pie/tui-charts-pie.wxml | chunk_5.webview.js |
| ./components/tui-circular-progress/tui-circular-progress.wxml | chunk_4.webview.js |
| ./components/tui-collapse/tui-collapse.wxml | chunk_6.webview.js |
| ./components/tui-countdown/tui-countdown.wxml | chunk_7.webview.js |
| ./components/tui-footer/tui-footer.wxml | chunk_8.webview.js |
| ./components/tui-form-field/tui-form-field.wxml | chunk_9.webview.js |
| ./components/tui-grid-item/tui-grid-item.wxml | chunk_10.webview.js |
| ./components/tui-grid/tui-grid.wxml | chunk_10.webview.js |
| ./components/tui-icon/tui-icon.wxml | chunk_11.webview.js |
| ./components/tui-label/tui-label.wxml | chunk_9.webview.js |
| ./components/tui-list-cell/tui-list-cell.wxml | chunk_12.webview.js |
| ./components/tui-list-view/tui-list-view.wxml | chunk_13.webview.js |
| ./components/tui-loadmore/tui-loadmore.wxml | chunk_14.webview.js |
| ./components/tui-modal/tui-modal.wxml | chunk_15.webview.js |
| ./components/tui-nomore/tui-nomore.wxml | chunk_16.webview.js |
| ./components/tui-numberbox/tui-numberbox.wxml | chunk_17.webview.js |
| ./components/tui-popup/tui-popup.wxml | chunk_18.webview.js |
| ./components/tui-poster/tui-poster.wxml | chunk_19.webview.js |
| ./components/tui-progress/tui-progress.wxml | chunk_20.webview.js |
| ./components/tui-radio-group/tui-radio-group.wxml | chunk_9.webview.js |
| ./components/tui-radio/tui-radio.wxml | chunk_9.webview.js |
| ./components/tui-rate/tui-rate.wxml | chunk_21.webview.js |
| ./components/tui-section/tui-section.wxml | chunk_22.webview.js |
| ./components/tui-steps/tui-steps.wxml | chunk_23.webview.js |
| ./components/tui-tabbar/tui-tabbar.wxml | chunk_24.webview.js |
| ./components/tui-tabs/tui-tabs.wxml | chunk_25.webview.js |
| ./components/tui-tag/tui-tag.wxml | chunk_26.webview.js |
| ./components/tui-textarea/tui-textarea.wxml | chunk_8.webview.js |
| ./components/tui-top-dropdown/tui-top-dropdown.wxml | chunk_27.webview.js |
| ./components/tui-week-date/tui-week-date.wxml | chunk_4.webview.js |

## 云函数调用清单

| 云函数 | 调用方 chunk |
|---|---|
| checkJigou | chunk_22.appservice.js |
| deleteFeedback | chunk_46.appservice.js |
| feedbackNotice | chunk_46.appservice.js |
| fetchData | chunk_17.appservice.js |
| generateVirtualPaySign | chunk_35.appservice.js |
| getGroupQRcode | chunk_25.appservice.js |
| getPhoneticMap | chunk_0.appservice.js |
| getSessionKey | chunk_35.appservice.js |
| getShareQRcode | chunk_27.appservice.js |
| handleDeliverGoods | chunk_35.appservice.js |
| imgSecCheck | chunk_41.appservice.js |
| payOrder | chunk_35.appservice.js |
| updateBabyInfo | chunk_41.appservice.js |
| updateGroupInfo | chunk_25.appservice.js |
| updateHelperClicks | chunk_33.appservice.js |
| updateMemberVip | chunk_0.appservice.js,chunk_35.appservice.js,chunk_8.appservice.js |
| updatePhoneData | chunk_8.appservice.js |
| updateUserData | chunk_25.appservice.js,chunk_27.appservice.js,chunk_29.appservice.js,chunk_30.appservice.js,chunk_32.appservice.js,chunk_34.appservice.js,chunk_41.appservice.js,chunk_47.appservice.js |
| updateUserParent | chunk_41.appservice.js |
| updateUserPlan | chunk_22.appservice.js,chunk_25.appservice.js,chunk_27.appservice.js,chunk_29.appservice.js,chunk_30.appservice.js,chunk_36.appservice.js,chunk_37.appservice.js |
| updateUserQuiz | chunk_29.appservice.js,chunk_30.appservice.js,chunk_47.appservice.js |
| updateUserSchool | chunk_39.appservice.js,chunk_43.appservice.js,chunk_44.appservice.js |
| updateUserStudy | chunk_25.appservice.js,chunk_27.appservice.js,chunk_29.appservice.js,chunk_30.appservice.js,chunk_34.appservice.js,chunk_43.appservice.js,chunk_47.appservice.js,chunk_48.appservice.js |
| updateVirtualVIP | chunk_35.appservice.js |
| updateWordNum | chunk_27.appservice.js |

## 云数据库集合引用

| 集合 | 引用 chunk |
|---|---|
| AA | chunk_0.appservice.js |
| class | chunk_31.appservice.js |
| feedback | chunk_33.appservice.js,chunk_46.appservice.js,chunk_8.appservice.js |
| group | chunk_17.appservice.js,chunk_22.appservice.js,chunk_25.appservice.js,chunk_31.appservice.js,chunk_36.appservice.js |
| guide | chunk_33.appservice.js |
| init | chunk_0.appservice.js,chunk_35.appservice.js,chunk_39.appservice.js,chunk_46.appservice.js,chunk_8.appservice.js |
| members | chunk_0.appservice.js,chunk_22.appservice.js,chunk_41.appservice.js,chunk_8.appservice.js |
| orders | chunk_35.appservice.js,chunk_46.appservice.js,chunk_8.appservice.js |
| phone | chunk_22.appservice.js,chunk_46.appservice.js,chunk_8.appservice.js |
| plan | chunk_17.appservice.js,chunk_22.appservice.js,chunk_25.appservice.js,chunk_27.appservice.js,chunk_31.appservice.js,chunk_36.appservice.js,chunk_37.appservice.js,chunk_38.appservice.js |
| units | chunk_39.appservice.js,chunk_43.appservice.js,chunk_44.appservice.js,chunk_45.appservice.js |
| user_data | chunk_0.appservice.js,chunk_25.appservice.js,chunk_27.appservice.js,chunk_29.appservice.js,chunk_30.appservice.js,chunk_32.appservice.js,chunk_34.appservice.js,chunk_38.appservice.js,chunk_42.appservice.js,chunk_47.appservice.js |
| user_parent | chunk_41.appservice.js,chunk_42.appservice.js |
| user_plan | chunk_22.appservice.js,chunk_25.appservice.js,chunk_27.appservice.js,chunk_29.appservice.js,chunk_30.appservice.js,chunk_32.appservice.js,chunk_36.appservice.js,chunk_37.appservice.js,chunk_38.appservice.js |
| user_school | chunk_39.appservice.js,chunk_43.appservice.js,chunk_44.appservice.js |
| user_study | chunk_0.appservice.js,chunk_22.appservice.js,chunk_25.appservice.js,chunk_27.appservice.js,chunk_29.appservice.js,chunk_30.appservice.js,chunk_31.appservice.js,chunk_32.appservice.js,chunk_34.appservice.js,chunk_36.appservice.js,chunk_38.appservice.js,chunk_41.appservice.js,chunk_42.appservice.js,chunk_43.appservice.js,chunk_47.appservice.js,chunk_48.appservice.js,chunk_8.appservice.js |
| words | chunk_27.appservice.js,chunk_29.appservice.js,chunk_30.appservice.js,chunk_32.appservice.js,chunk_38.appservice.js,chunk_39.appservice.js,chunk_43.appservice.js,chunk_44.appservice.js,chunk_47.appservice.js,chunk_48.appservice.js |

变量名引用 collection(a) 次数: 18（具体集合名需动态确认，见 captures/）


## 全局样式来源（page-frame.html setCssToHead）

- ./components/list/list.wxss
- ./app.wxfa43a4a7041a84de.wxss
- ./miniprogram_npm/weui-miniprogram/actionsheet/actionsheet.wxss
- ./miniprogram_npm/weui-miniprogram/badge/badge.wxss
- ./miniprogram_npm/weui-miniprogram/cell/cell.wxss
- ./miniprogram_npm/weui-miniprogram/cells/cells.wxss
- ./miniprogram_npm/weui-miniprogram/checkbox/checkbox.wxss
- ./miniprogram_npm/weui-miniprogram/checkbox-group/checkbox-group.wxss
- ./miniprogram_npm/weui-miniprogram/dialog/dialog.wxss
- ./miniprogram_npm/weui-miniprogram/form/form.wxss
- ./miniprogram_npm/weui-miniprogram/form-page/form-page.wxss
- ./miniprogram_npm/weui-miniprogram/gallery/gallery.wxss
- ./miniprogram_npm/weui-miniprogram/grids/grids.wxss
- ./miniprogram_npm/weui-miniprogram/half-screen-dialog/half-screen-dialog.wxss
- ./miniprogram_npm/weui-miniprogram/icon/icon.wxss
- ./miniprogram_npm/weui-miniprogram/loading/loading.wxss
- ./miniprogram_npm/weui-miniprogram/msg/msg.wxss
- ./miniprogram_npm/weui-miniprogram/navigation-bar/navigation-bar.wxss
- ./miniprogram_npm/weui-miniprogram/searchbar/searchbar.wxss
- ./miniprogram_npm/weui-miniprogram/slideview/slideview.wxss
- ./miniprogram_npm/weui-miniprogram/slideview/slideview-skyline.wxss
- ./miniprogram_npm/weui-miniprogram/tabbar/tabbar.wxss
- ./miniprogram_npm/weui-miniprogram/toptips/toptips.wxss
- ./miniprogram_npm/weui-miniprogram/uploader/uploader.wxss
- ./app.wxss
- ./components/privacyPopup/privacyPopup.wxss
- ./pages/index/index.wxss
- ./components/tui-bottom-popup/tui-bottom-popup.wxss
- ./components/tui-grid-item/tui-grid-item.wxss
- ./components/tui-grid/tui-grid.wxss
- ./components/tui-icon/tui-icon.wxss
- ./components/tui-list-cell/tui-list-cell.wxss
- ./components/tui-list-view/tui-list-view.wxss
- ./components/tui-loadmore/tui-loadmore.wxss
- ./components/tui-modal/tui-modal.wxss
- ./components/tui-nomore/tui-nomore.wxss
- ./components/tui-numberbox/tui-numberbox.wxss
- ./pages/planCreate/planCreate.wxss
- ./components/tui-popup/tui-popup.wxss
- ./components/tui-poster/tui-poster.wxss
- ./components/tui-button/tui-button.wxss
- ./components/tui-calendar/tui-calendar.wxss
- ./components/tui-progress/tui-progress.wxss
- ./components/tui-rate/tui-rate.wxss
- ./components/tui-section/tui-section.wxss
- ./pages/jigou/jigou.wxss
- ./components/tui-steps/tui-steps.wxss
- ./components/tui-tabbar/tui-tabbar.wxss
- ./components/tui-tabs/tui-tabs.wxss
- ./pages/group/group.wxss
- ./components/tui-tag/tui-tag.wxss
- ./components/tui-top-dropdown/tui-top-dropdown.wxss
- ./pages/card/card.wxss
- ./pages/audio/audio.wxss
- ./pages/cardQuiz/cardQuiz.wxss
- ./components/tui-charts-column/tui-charts-column.wxss
- ./pages/cardTest/cardTest.wxss
- ./pages/class/class.wxss
- ./pages/daka/daka.wxss
- ./pages/help/help.wxss
- ./pages/listen/listen.wxss
- ./pages/member/member.wxss
- ./pages/planDetail/planDetail.wxss
- ./pages/planList/planList.wxss
- ./pages/report/report.wxss
- ./pages/school/school.wxss
- ./components/tui-charts-line/tui-charts-line.wxss
- ./components/tui-circular-progress/tui-circular-progress.wxss
- ./components/tui-week-date/tui-week-date.wxss
- ./pages/search/search.wxss
- ./pages/set/set.wxss
- ./pages/share/share.wxss
- ./pages/unit/unit.wxss
- ./pages/unitQuiz/unitQuiz.wxss
- ./pages/unitStudy/unitStudy.wxss
- ./pages/vip/vip.wxss
- ./pages/word/word.wxss
- ./pages/wordExt/wordExt.wxss
- ./components/tui-charts-pie/tui-charts-pie.wxss
- ./components/tui-collapse/tui-collapse.wxss
- ./components/tui-countdown/tui-countdown.wxss
- ./components/tui-footer/tui-footer.wxss
- ./components/tui-textarea/tui-textarea.wxss
- ./pages/more/more.wxss
- ./components/tui-form-field/tui-form-field.wxss
- ./components/tui-label/tui-label.wxss
- ./components/tui-radio-group/tui-radio-group.wxss
- ./components/tui-radio/tui-radio.wxss

含 `__COMMON_STYLESHEETS__`: True
含 ColorUI 标志类 `.bg-macron`: True