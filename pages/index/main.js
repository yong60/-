require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
const app = getApp()

global.webpackJsonpMpvue([10],{
  "5vTQ":function(t,s,a){"use strict";var e=a("Dd8w"),n=a.n(e),i=a("NYxO"),o=a("0xDb");s.a={data:function(){return{modalVisible:!1,conversation:{}}},computed:n()({},Object(i.c)({
    allConversation:function(t){
      console.log("是不是这里")
      if(app.globalData.youke==0){
        wx.setTabBarItem({
          index: 0,
          text: '消息',
          iconPath: "static/theme/chat.png",
          selectedIconPath:"static/theme/chat-theme.png",
          success:function(){
            console.log("succeed")
          },
          fail:function(){
            console.log("fail")
          }
        }),
        wx.setTabBarItem({
          index: 1,
          text: '通讯录',
          iconPath: "static/theme/contact.png",
          selectedIconPath:"static/theme/contact-theme.png",
          success:function(){
            console.log("succeed")
          },
          fail:function(){
            console.log("fail")
          }
        })
      }

      return t.conversation.allConversation

    },

  onShow:function(){
    if(app.globalData.youke==0){
      wx.setTabBarItem({
        index: 0,
        text: '消息',
        iconPath: "static/theme/chat.png",
        selectedIconPath:"static/theme/chat-theme.png",
        success:function(){
          console.log("succeed")
        },
        fail:function(){
          console.log("fail")
        }
      }),
      wx.setTabBarItem({
        index: 1,
        text: '通讯录',
        iconPath: "static/theme/contact.png",
        selectedIconPath:"static/theme/contact-theme.png",
        success:function(){
          console.log("succeed")
        },
        fail:function(){
          console.log("fail")
        }
      })
    }
  },

  isSdkReady:function(t){return t.global.isSdkReady}}),Object(i.b)(["totalUnreadCount","myInfo"])),onPullDownRefresh:function(){Object(o.e)(wx.$app.getConversationList(),1e3),wx.stopPullDownRefresh()},methods:{longTimePress:function(t){this.conversation=t,this.handleModalShow()},handleModalShow:function(){this.modalVisible=!this.modalVisible},handleConfirm:function(){this.handleModalShow(),this.deleteConversation(this.conversation)},setMessageRead:function(t){0!==t.unreadCount&&wx.$app.setMessageRead({conversationID:t.conversationID})},checkoutConversation:function(t,s){this.$store.dispatch("checkoutConversation",t.conversationID)},checkoutNotification:function(t){var s=this;this.$store.commit("resetCurrentConversation"),this.$store.commit("resetGroup"),this.setMessageRead(t),wx.$app.getConversationProfile(t.conversationID).then(function(t){s.$store.commit("updateCurrentConversation",t.data.conversation),s.$store.dispatch("getMessageList")});wx.navigateTo({url:"../system/main"})},deleteConversation:function(t){wx.$app.deleteConversation(t.conversationID).then(function(t){console.log("delete success",t)})},empty:function(){wx.navigateTo({url:"../search/main"})}},onLoad:function(){this.isSdkReady},watch:{isSdkReady:function(t){t&&wx.hideLoading()}}}},"7a9s":function(t,s){},JOJH:function(t,s,a){"use strict";var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"chat-container"},[0===t.allConversation.length?a("div",{staticClass:"empty"},[a("button",{staticClass:"empty-button",attrs:{type:"button",eventid:"0"},on:{click:t.empty}},[t._v("\n      发起一段对话吧\n    ")])],1):t._e(),t._v(" "),a("i-modal",{attrs:{title:"确认删除会话？",visible:t.modalVisible,eventid:"1",mpcomid:"0"},on:{ok:function(s){t.handleConfirm()},cancel:t.handleModalShow}}),t._v(" "),t._l(t.allConversation,function(s,e){return["C2C"===s.type?a("div",{key:s.conversationID,staticClass:"chat",attrs:{eventid:"4_"+e},on:{longpress:function(a){t.longTimePress(s)},click:function(a){t.checkoutConversation(s,s.userProfile.nick||s.userProfile.userID)}}},[a("div",{staticClass:"avatar-container"},[a("i-avatar",{attrs:{src:s.userProfile.avatar||"/static/images/avatar.png","i-class":"avatar",mpcomid:"1_"+e}})],1),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"information"},[a("div",{staticClass:"username"},[t._v(t._s(s.userProfile.nick||s.userProfile.userID))]),t._v(" "),s.lastMessage.isRevoked?a("div",{staticClass:"content"},[t.myInfo.userID===s.lastMessage.fromAccount?[t._v("你撤回了一条消息")]:[t._v(t._s(s.lastMessage.fromAccount)+"撤回了一条消息")]],2):a("div",{staticClass:"content"},[t._v(t._s(s.lastMessage.messageForShow))])]),t._v(" "),a("div",{staticClass:"time"},[a("div",{staticClass:"last"},[t._v(t._s(s.lastMessage._lastTime))]),t._v(" "),s.unreadCount>0?a("div",{staticClass:"remain"},[s.unreadCount>99?a("span",{staticClass:"info"},[t._v("99+")]):a("span",{staticClass:"info"},[t._v(t._s(s.unreadCount))])]):t._e()])])]):"GROUP"===s.type?a("div",{key:s.conversationID,staticClass:"chat",attrs:{eventid:"2_"+e},on:{click:function(a){t.checkoutConversation(s,s.groupProfile.name||s.groupProfile.ID)},longpress:function(a){t.longTimePress(s)}}},[a("div",{staticClass:"avatar-container"},[a("i-avatar",{attrs:{src:s.groupProfile.avatar,"i-class":"avatar",mpcomid:"4_"+e}})],1),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"information"},[a("div",{staticClass:"username"},[t._v(t._s(s.groupProfile.name||s.groupProfile.groupID))]),t._v(" "),s.lastMessage.isRevoked?a("div",{staticClass:"content"},[t.myInfo.userID===s.lastMessage.fromAccount?[t._v("你撤回了一条消息")]:[t._v(t._s(s.lastMessage.fromAccount)+"撤回了一条消息")]],2):a("div",{staticClass:"content"},["@TIM#SYSTEM"===s.lastMessage.fromAccount?[t._v(t._s(s.lastMessage.messageForShow))]:[t._v(t._s(s.lastMessage.fromAccount)+"："+t._s(s.lastMessage.messageForShow))]],2)]),t._v(" "),a("div",{staticClass:"time"},[a("div",{staticClass:"last"},[t._v(t._s(s.lastMessage._lastTime))]),t._v(" "),s.unreadCount>0?a("div",{staticClass:"remain"},[s.unreadCount>99?a("span",{staticClass:"info"},[t._v("99+")]):a("span",{staticClass:"info"},[t._v(t._s(s.unreadCount))])]):t._e()])])]):"@TIM#SYSTEM"===s.type?a("div",{key:s.conversationID,staticClass:"chat",attrs:{eventid:"3_"+e},on:{click:function(a){t.checkoutNotification(s)},longpress:function(a){t.longTimePress(s)}}},[t._m(0,!0),t._v(" "),a("div",{staticClass:"right"},[t._m(1,!0),t._v(" "),a("div",{staticClass:"time"},[a("div",{staticClass:"last"}),t._v(" "),s.unreadCount>0?a("div",{staticClass:"remain"},[s.unreadCount>99?a("span",{staticClass:"info"},[t._v("99+")]):a("span",{staticClass:"info"},[t._v(t._s(s.unreadCount))])]):t._e()])])]):t._e()]})],2)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"avatar-container"},[s("image",{staticClass:"avatar",attrs:{src:"/static/images/system.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"information"},[s("div",{staticClass:"username"},[this._v("系统通知")]),this._v(" "),s("div",{staticClass:"content"},[this._v("点击查看")])])}]};s.a=e},MhDc:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("5nAL"),n=a.n(e),i=a("Qt9A");n.a.config.errorHandler=function(t){console&&console.error&&console.error(t)},new n.a(i.a).$mount()},Qt9A:function(t,s,a){"use strict";var e=a("5vTQ"),n=a("JOJH");var i=function(t){a("7a9s")},o=a("ybqe")(e.a,n.a,i,null,null);s.a=o.exports}},["MhDc"]);