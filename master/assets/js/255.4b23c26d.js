(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{829:function(e,t,n){"use strict";n.r(t);var r=n(1),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Evidence is used to identify validators who have or are acting malicious. There are multiple types of evidence, to read more on the evidence types please see "),n("a",{attrs:{href:"https://docs.tendermint.com/master/spec/core/data_structures.html#evidence",target:"_blank",rel:"noopener noreferrer"}},[e._v("Evidence Types"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("The evidence reactor works similar to the mempool reactor. When evidence is observed, it is sent to all the peers in a repetitive manner. This ensures evidence is sent to as many people as possible to avoid sensoring. After evidence is received by peers and committed in a block it is pruned from the evidence module.")]),e._v(" "),n("p",[e._v("Sending incorrectly encoded data or data exceeding "),n("code",[e._v("maxMsgSize")]),e._v(" will result\nin stopping the peer.")])])}),[],!1,null,null,null);t.default=i.exports}}]);