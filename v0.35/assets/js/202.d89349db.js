(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{728:function(e,t,i){"use strict";i.r(t);var o=i(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"lightclient-attackers-isolation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lightclient-attackers-isolation"}},[e._v("#")]),e._v(" Lightclient Attackers Isolation")]),e._v(" "),i("blockquote",[i("p",[e._v("Warning: This is the beginning of an unfinished draft. Don't continue reading!")])]),e._v(" "),i("p",[e._v("Adversarial nodes may have the incentive to lie to a lightclient about the state of a Tendermint blockchain. An attempt to do so is called attack. Light client "),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/verification/verification_002_draft.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("verification"),i("OutboundLink")],1),e._v(' checks incoming data by checking a so-called "commit", which is a forwarded set of signed messages that is (supposedly) produced during executing Tendermint consensus. Thus, an attack boils down to creating and signing Tendermint consensus messages in deviation from the Tendermint consensus algorithm rules.')]),e._v(" "),i("p",[e._v("As Tendermint consensus and light client verification is safe under the assumption of more than 2/3 of correct voting power per block "),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/verification/verification_002_draft.md#tmbc-fm-2thirds1",target:"_blank",rel:"noopener noreferrer"}},[e._v("[TMBC-FM-2THIRDS]"),i("OutboundLink")],1),e._v(", this implies that if there was an attack then "),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/verification/verification_002_draft.md#tmbc-fm-2thirds1",target:"_blank",rel:"noopener noreferrer"}},[e._v("[TMBC-FM-2THIRDS]"),i("OutboundLink")],1),e._v(" was violated, that is, there is a block such that")]),e._v(" "),i("ul",[i("li",[e._v("validators deviated from the protocol, and")]),e._v(" "),i("li",[e._v("these validators represent more than 1/3 of the voting power in that block.")])]),e._v(" "),i("p",[e._v("In the case of an "),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/detection/detection_003_reviewed.md#node-based-characterization-of-attacks",target:"_blank",rel:"noopener noreferrer"}},[e._v("attack"),i("OutboundLink")],1),e._v(", the lightclient "),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/detection/detection_003_reviewed.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("attack detection mechanism"),i("OutboundLink")],1),e._v(" computes data, so called evidence "),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/detection/detection_003_reviewed.md#lc-data-evidence1",target:"_blank",rel:"noopener noreferrer"}},[e._v("[LC-DATA-EVIDENCE.1]"),i("OutboundLink")],1),e._v(", that can be used")]),e._v(" "),i("ul",[i("li",[e._v("to proof that there has been attack "),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/detection/detection_003_reviewed.md#tmbc-lc-evidence-data1",target:"_blank",rel:"noopener noreferrer"}},[e._v("[TMBC-LC-EVIDENCE-DATA.1]"),i("OutboundLink")],1),e._v(" and")]),e._v(" "),i("li",[e._v("as basis to find the actual nodes that deviated from the Tendermint protocol.")])]),e._v(" "),i("p",[e._v("This specification considers how a full node in a Tendermint blockchain can isolate a set of attackers that launched the attack. The set should satisfy")]),e._v(" "),i("ul",[i("li",[e._v("the set does not contain a correct validator")]),e._v(" "),i("li",[e._v("the set contains validators that represent more than 1/3 of the voting power of a block that is still within the unbonding period")])]),e._v(" "),i("h1",{attrs:{id:"outline"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[e._v("#")]),e._v(" Outline")]),e._v(" "),i("p",[i("strong",[e._v("TODO")]),e._v(" when preparing a version for broader review.")]),e._v(" "),i("h1",{attrs:{id:"part-i-basics"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#part-i-basics"}},[e._v("#")]),e._v(" Part I - Basics")]),e._v(" "),i("p",[e._v("For definitions of data structures used here, in particular LightBlocks "),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/verification/verification_002_draft.md#lcv-data-lightblock1",target:"_blank",rel:"noopener noreferrer"}},[e._v("[LCV-DATA-LIGHTBLOCK.1]"),i("OutboundLink")],1),e._v(", cf. "),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/verification/verification_002_draft.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Light Client Verification"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h1",{attrs:{id:"part-ii-definition-of-the-problem"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#part-ii-definition-of-the-problem"}},[e._v("#")]),e._v(" Part II - Definition of the Problem")]),e._v(" "),i("p",[e._v("The specification of the "),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/detection/detection_003_reviewed.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("detection mechanism"),i("OutboundLink")],1),e._v(" describes")]),e._v(" "),i("ul",[i("li",[e._v("what is a light client attack,")]),e._v(" "),i("li",[e._v("conditions under which the detector will detect a light client attack,")]),e._v(" "),i("li",[e._v("and the format of the output data, called evidence, in the case an attack is detected. The format is defined in\n"),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/detection/detection_003_reviewed.md#lc-data-evidence1",target:"_blank",rel:"noopener noreferrer"}},[e._v("[LC-DATA-EVIDENCE.1]"),i("OutboundLink")],1),e._v(" and looks as follows")])]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBMaWdodENsaWVudEF0dGFja0V2aWRlbmNlIHN0cnVjdCB7CiAgICBDb25mbGljdGluZ0Jsb2NrICAgTGlnaHRCbG9jawogICAgQ29tbW9uSGVpZ2h0ICAgICAgIGludDY0Cn0K"}}),e._v(" "),i("p",[e._v("The isolator is a function that gets as input evidence "),i("code",[e._v("ev")]),e._v("\nand a prefix of the blockchain "),i("code",[e._v("bc")]),e._v(" at least up to height "),i("code",[e._v("ev.ConflictingBlock.Header.Height + 1")]),e._v(". The output is a set of "),i("em",[e._v("peerIDs")]),e._v(" of validators.")]),e._v(" "),i("p",[e._v("We assume that the full node is synchronized with the blockchain and has reached the height "),i("code",[e._v("ev.ConflictingBlock.Header.Height + 1")]),e._v(".")]),e._v(" "),i("h4",{attrs:{id:"fn-inv-output-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fn-inv-output-1"}},[e._v("#")]),e._v(" "),i("strong",[e._v("[FN-INV-Output.1]")])]),e._v(" "),i("p",[e._v("When an output is generated it satisfies the following properties:")]),e._v(" "),i("ul",[i("li",[e._v("If\n"),i("ul",[i("li",[i("code",[e._v("bc[CommonHeight].bfttime")]),e._v(" is within the unbonding period w.r.t. the time at the full node,")]),e._v(" "),i("li",[i("code",[e._v("ev.ConflictingBlock.Header != bc[ev.ConflictingBlock.Header.Height]")])]),e._v(" "),i("li",[e._v("Validators in "),i("code",[e._v("ev.ConflictingBlock.Commit")]),e._v(" represent more than 1/3 of the voting power in "),i("code",[e._v("bc[ev.CommonHeight].NextValidators")])])])]),e._v(" "),i("li",[e._v("Then: A set of validators in "),i("code",[e._v("bc[CommonHeight].NextValidators")]),e._v(" that\n"),i("ul",[i("li",[e._v("represent more than 1/3 of the voting power in "),i("code",[e._v("bc[ev.commonHeight].NextValidators")])]),e._v(" "),i("li",[e._v("signed Tendermint consensus messages for height "),i("code",[e._v("ev.ConflictingBlock.Header.Height")]),e._v(" by violating the Tendermint consensus protocol.")])])]),e._v(" "),i("li",[e._v("Else: the empty set.")])]),e._v(" "),i("h1",{attrs:{id:"part-iv-protocol"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#part-iv-protocol"}},[e._v("#")]),e._v(" Part IV - Protocol")]),e._v(" "),i("p",[e._v("Here we discuss how to solve the problem of isolating misbehaving processes. We describe the function "),i("code",[e._v("isolateMisbehavingProcesses")]),e._v(" as well as all the helping functions below. In "),i("a",{attrs:{href:"#part-v---Completeness"}},[e._v("Part V")]),e._v(", we discuss why the solution is complete based on result from analysis with automated tools.")]),e._v(" "),i("h2",{attrs:{id:"isolation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#isolation"}},[e._v("#")]),e._v(" Isolation")]),e._v(" "),i("h3",{attrs:{id:"outline-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#outline-2"}},[e._v("#")]),e._v(" Outline")]),e._v(" "),i("blockquote",[i("p",[e._v("Describe solution (in English), decomposition into functions, where communication to other components happens.")])]),e._v(" "),i("h4",{attrs:{id:"lcai-func-main-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lcai-func-main-1"}},[e._v("#")]),e._v(" "),i("strong",[e._v("[LCAI-FUNC-MAIN.1]")])]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBpc29sYXRlTWlzYmVoYXZpbmdQcm9jZXNzZXMoZXYgTGlnaHRDbGllbnRBdHRhY2tFdmlkZW5jZSwgYmMgQmxvY2tjaGFpbikgW11WYWxpZGF0b3JBZGRyZXNzIHsKCiAgICByZWZlcmVuY2UgOj0gYmNbZXYuY29uZmxpY3RpbmdCbG9jay5IZWFkZXIuSGVpZ2h0XS5IZWFkZXIKICAgIGV2X2hlYWRlciA6PSBldi5jb25mbGljdGluZ0Jsb2NrLkhlYWRlcgoKICAgIHJlZl9jb21taXQgOj0gYmNbZXYuY29uZmxpY3RpbmdCbG9jay5IZWFkZXIuSGVpZ2h0ICsgMV0uSGVhZGVyLkxhc3RDb21taXQgLy8gKyAxICEhCiAgICBldl9jb21taXQgOj0gZXYuY29uZmxpY3RpbmdCbG9jay5Db21taXQKCiAgICBpZiB2aW9sYXRlc1RNVmFsaWRpdHkocmVmZXJlbmNlLCBldl9oZWFkZXIpIHsKICAgICAgICAvLyBsdW5hdGljIGxpZ2h0IGNsaWVudCBhdHRhY2sKICAgICAgICBzaWduYXRvcmllcyA6PSBTaWduZXJzKGV2LkNvbmZsaWN0aW5nQmxvY2suQ29tbWl0KQogICAgICAgIGJvbmRlZF92YWxzIDo9IEFkZHJlc3NlcyhiY1tldi5Db21tb25IZWlnaHRdLk5leHRWYWxpZGF0b3JzKQogICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb24oc2lnbmF0b3JpZXMsYm9uZGVkX3ZhbHMpCgogICAgfQogICAgLy8gSWYgdGhpcyBwb2ludCBpcyByZWFjaGVkIHRoZSB2YWxpZGF0b3Igc2V0cyBpbiByZWZlcmVuY2UgYW5kIGV2X2hlYWRlciBhcmUgaWRlbnRpY2FsCiAgICBlbHNlIGlmIFJvdW5kT2YocmVmX2NvbW1pdCkgPT0gUm91bmRPZihldl9jb21taXQpIHsKICAgICAgICAvLyBlcXVpdm9jYXRpb24gbGlnaHQgY2xpZW50IGF0dGFjawogICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb24oU2lnbmVycyhyZWZfY29tbWl0KSwgU2lnbmVycyhldl9jb21taXQpKQogICAgfQogICAgZWxzZSB7CiAgICAgICAgLy8gYW1uZXNpYSBsaWdodCBjbGllbnQgYXR0YWNrCiAgICAgICAgcmV0dXJuIElzb2xhdGVBbW5lc2lhQXR0YWNrZXIoZXYsIGJjKQogICAgfQp9Cg=="}}),e._v(" "),i("ul",[i("li",[e._v("Implementation comment\n"),i("ul",[i("li",[e._v("If the full node has only reached height "),i("code",[e._v("ev.conflictingBlock.Header.Height")]),e._v(" then "),i("code",[e._v("bc[ev.conflictingBlock.Header.Height + 1].Header.LastCommit")]),e._v(" refers to the locally stored commit for this height. (This commit must be present by the precondition on "),i("code",[e._v("length(bc)")]),e._v(".)")]),e._v(" "),i("li",[e._v("We check in the precondition that the unbonding period is not expired. However, since time moves on, before handing the validators over Cosmos SDK, the time needs to be checked again to satisfy the contract which requires that only bonded validators are reported. This passing of validators to the SDK is out of scope of this specification.")])])]),e._v(" "),i("li",[e._v("Expected precondition\n"),i("ul",[i("li",[i("code",[e._v("length(bc) >= ev.conflictingBlock.Header.Height")])]),e._v(" "),i("li",[i("code",[e._v("ValidAndVerifiedUnbonding(bc[ev.CommonHeight], ev.ConflictingBlock) == SUCCESS")])]),e._v(" "),i("li",[i("code",[e._v("ev.ConflictingBlock.Header != bc[ev.ConflictingBlock.Header.Height]")])]),e._v(" "),i("li",[e._v("TODO: input light blocks pass basic validation")])])]),e._v(" "),i("li",[e._v("Expected postcondition\n"),i("ul",[i("li",[i("a",{attrs:{href:"#FN-INV-Output1"}},[e._v("[FN-INV-Output.1]")]),e._v(" holds")])])]),e._v(" "),i("li",[e._v("Error condition\n"),i("ul",[i("li",[e._v("returns an error if precondition is violated.")])])])]),e._v(" "),i("h3",{attrs:{id:"details-of-the-functions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#details-of-the-functions"}},[e._v("#")]),e._v(" Details of the Functions")]),e._v(" "),i("h4",{attrs:{id:"lcai-func-vvu-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lcai-func-vvu-1"}},[e._v("#")]),e._v(" "),i("strong",[e._v("[LCAI-FUNC-VVU.1]")])]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBWYWxpZEFuZFZlcmlmaWVkVW5ib25kaW5nKHRydXN0ZWQgTGlnaHRCbG9jaywgdW50cnVzdGVkIExpZ2h0QmxvY2spIFJlc3VsdAo="}}),e._v(" "),i("ul",[i("li",[e._v("Conditions are identical to "),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/verification/verification_002_draft.md#lcv-func-valid2",target:"_blank",rel:"noopener noreferrer"}},[e._v("[LCV-FUNC-VALID.2]"),i("OutboundLink")],1),e._v(' except the precondition "'),i("em",[e._v("trusted.Header.Time > now - trustingPeriod")]),e._v('" is substituted with\n'),i("ul",[i("li",[i("code",[e._v("trusted.Header.Time > now - UnbondingPeriod")])])])])]),e._v(" "),i("h4",{attrs:{id:"lcai-func-nonvalid-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lcai-func-nonvalid-1"}},[e._v("#")]),e._v(" "),i("strong",[e._v("[LCAI-FUNC-NONVALID.1]")])]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyB2aW9sYXRlc1RNVmFsaWRpdHkocmVmIEhlYWRlciwgZXYgSGVhZGVyKSBib29sZWFuCg=="}}),e._v(" "),i("ul",[i("li",[e._v("Implementation remarks\n"),i("ul",[i("li",[e._v("checks whether the evidence header "),i("code",[e._v("ev")]),e._v(" violates the validity property of Tendermint Consensus, by checking agains a reference header")])])]),e._v(" "),i("li",[e._v("Expected precondition\n"),i("ul",[i("li",[i("code",[e._v("ref.Height == ev.Height")])])])]),e._v(" "),i("li",[e._v("Expected postcondition\n"),i("ul",[i("li",[e._v("returns evaluation of the following disjunction"),i("br"),e._v(" "),i("strong",[e._v("[[LCAI-NONVALID-OUTPUT.1]]")]),e._v(" =="),i("br"),e._v(" "),i("code",[e._v("ref.ValidatorsHash != ev.ValidatorsHash")]),e._v(" or"),i("br"),e._v(" "),i("code",[e._v("ref.NextValidatorsHash != ev.NextValidatorsHash")]),e._v(" or"),i("br"),e._v(" "),i("code",[e._v("ref.ConsensusHash != ev.ConsensusHash")]),e._v(" or"),i("br"),e._v(" "),i("code",[e._v("ref.AppHash != ev.AppHash")]),e._v(" or"),i("br"),e._v(" "),i("code",[e._v("ref.LastResultsHash != ev.LastResultsHash")])])])])]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBJc29sYXRlQW1uZXNpYUF0dGFja2VyKGV2IExpZ2h0Q2xpZW50QXR0YWNrRXZpZGVuY2UsIGJjIEJsb2NrY2hhaW4pIFtdVmFsaWRhdG9yQWRkcmVzcwo="}}),e._v(" "),i("ul",[i("li",[e._v("Implementation remarks\n"),i("strong",[e._v("TODO:")]),e._v(" What should we do here? Refer to the accountability doc?")]),e._v(" "),i("li",[e._v("Expected postcondition\n"),i("strong",[e._v("TODO:")]),e._v(" What should we do here? Refer to the accountability doc?")])]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBSb3VuZE9mKGNvbW1pdCBDb21taXQpIFtdVmFsaWRhdG9yQWRkcmVzcwo="}}),e._v(" "),i("ul",[i("li",[e._v("Expected precondition\n"),i("ul",[i("li",[i("code",[e._v("commit")]),e._v(" is well-formed. In particular all votes are from the same round "),i("code",[e._v("r")]),e._v(".")])])]),e._v(" "),i("li",[e._v("Expected postcondition\n"),i("ul",[i("li",[e._v("returns round "),i("code",[e._v("r")]),e._v(" that is encoded in all the votes of the commit")])])])]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBTaWduZXJzKGNvbW1pdCBDb21taXQpIFtdVmFsaWRhdG9yQWRkcmVzcwo="}}),e._v(" "),i("ul",[i("li",[e._v("Expected postcondition\n"),i("ul",[i("li",[e._v("returns all validator addresses in "),i("code",[e._v("commit")])])])])]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBBZGRyZXNzZXModmFscyBWYWxpZGF0b3JbXSkgVmFsaWRhdG9yQWRkcmVzc1tdCg=="}}),e._v(" "),i("ul",[i("li",[e._v("Expected postcondition\n"),i("ul",[i("li",[e._v("returns all validator addresses in "),i("code",[e._v("vals")])])])])]),e._v(" "),i("h1",{attrs:{id:"part-v-completeness"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#part-v-completeness"}},[e._v("#")]),e._v(" Part V - Completeness")]),e._v(" "),i("p",[e._v("As discussed in the beginning of this document, an attack boils down to creating and signing Tendermint consensus messages in deviation from the Tendermint consensus algorithm rules.\nThe main function "),i("code",[e._v("isolateMisbehavingProcesses")]),e._v(" distinguishes three kinds of wrongly signing messages, namely,")]),e._v(" "),i("ul",[i("li",[e._v("lunatic: signing invalid blocks")]),e._v(" "),i("li",[e._v("equivocation: double-signing valid blocks in the same consensus round")]),e._v(" "),i("li",[e._v("amnesia: signing conflicting blocks in different consensus rounds, without having seen a quorum of messages that would have allowed to do so.")])]),e._v(" "),i("p",[e._v("The question is whether this captures all attacks.\nFirst observe that the first checking in "),i("code",[e._v("isolateMisbehavingProcesses")]),e._v(" is "),i("code",[e._v("violatesTMValidity")]),e._v(". It takes care of lunatic attacks. If this check passes, that is, if "),i("code",[e._v("violatesTMValidity")]),e._v(" returns "),i("code",[e._v("FALSE")]),e._v(" this means that [FN-NONVALID-OUTPUT] evaluates to false, which implies that "),i("code",[e._v("ref.ValidatorsHash = ev.ValidatorsHash")]),e._v(". Hence after "),i("code",[e._v("violatesTMValidity")]),e._v(", all the involved validators are the ones from the blockchain. It is thus sufficient to analyze one instance of Tendermint consensus with a fixed group membership (set of validators). Also it is sufficient to consider two different valid consensus values, that is, binary consensus.")]),e._v(" "),i("p",[i("strong",[e._v("TODO")]),e._v(" we have analyzed Tendermint consensus with TLA+ and have accompanied Galois in an independent study of the protocol based on "),i("a",{attrs:{href:"https://github.com/tendermint/spec/tree/master/ivy-proofs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ivy proofs"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h1",{attrs:{id:"references"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),i("p",[e._v("["),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/supervisor/supervisor_001_draft.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("supervisor"),i("OutboundLink")],1),e._v("] The specification of the light client supervisor.")]),e._v(" "),i("p",[e._v("["),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/verification/verification_002_draft.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("verification"),i("OutboundLink")],1),e._v("] The specification of the light client verification protocol")]),e._v(" "),i("p",[e._v("["),i("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/lightclient/detection/detection_003_reviewed.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("detection"),i("OutboundLink")],1),e._v("] The specification of the light client attack detection mechanism.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);