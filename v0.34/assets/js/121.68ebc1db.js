(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{716:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-057-rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-057-rpc"}},[e._v("#")]),e._v(" ADR 057: RPC")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("19-05-2020: created")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Currently the RPC layer of Tendermint is using a variant of the JSON-RPC protocol. This ADR is meant to serve as a pro/con list for possible alternatives and JSON-RPC.")]),e._v(" "),a("p",[e._v("There are currently two options being discussed: gRPC & JSON-RPC.")]),e._v(" "),a("h3",{attrs:{id:"json-rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc"}},[e._v("#")]),e._v(" JSON-RPC")]),e._v(" "),a("p",[e._v("JSON-RPC is a JSON-based RPC protocol. Tendermint has implemented its own variant of JSON-RPC which is not compatible with the "),a("a",{attrs:{href:"https://www.jsonrpc.org/specification",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON-RPC 2.0 specification"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Pros:")])]),e._v(" "),a("ul",[a("li",[e._v("Easy to use & implement (by default)")]),e._v(" "),a("li",[e._v("Well-known and well-understood by users and integrators")]),e._v(" "),a("li",[e._v("Integrates reasonably well with web infrastructure (proxies, API gateways, service meshes, caches, etc)")]),e._v(" "),a("li",[e._v("human readable encoding (by default)")])]),e._v(" "),a("p",[a("strong",[e._v("Cons:")])]),e._v(" "),a("ul",[a("li",[e._v("No schema support")]),e._v(" "),a("li",[e._v("RPC clients must be hand-written")]),e._v(" "),a("li",[e._v("Streaming not built into protocol")]),e._v(" "),a("li",[e._v("Underspecified types (e.g. numbers and timestamps)")]),e._v(" "),a("li",[e._v("Tendermint has its own implementation (not standards compliant, maintenance overhead)\n"),a("ul",[a("li",[e._v("High maintenance cost associated to this")])])]),e._v(" "),a("li",[e._v("Stdlib "),a("code",[e._v("jsonrpc")]),e._v(" package only supports JSON-RPC 1.0, no dominant package for JSON-RPC 2.0")]),e._v(" "),a("li",[e._v("Tooling around documentation/specification (e.g. Swagger) could be better")]),e._v(" "),a("li",[e._v("JSON data is larger (offset by HTTP compression)")]),e._v(" "),a("li",[e._v("Serializing is slow ("),a("a",{attrs:{href:"https://github.com/alecthomas/go_serialization_benchmarks",target:"_blank",rel:"noopener noreferrer"}},[e._v("~100% marshal, ~400% unmarshal"),a("OutboundLink")],1),e._v("); insignificant in absolute terms")]),e._v(" "),a("li",[e._v("Specification was last updated in 2013 and is way behind Swagger/OpenAPI")])]),e._v(" "),a("h3",{attrs:{id:"grpc-grpc-gateway-rest-swagger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc-grpc-gateway-rest-swagger"}},[e._v("#")]),e._v(" gRPC + gRPC-gateway (REST + Swagger)")]),e._v(" "),a("p",[e._v("gRPC is a high performant RPC framework. It has been battle tested by a large number of users and is heavily relied on and maintained by countless large corporations.")]),e._v(" "),a("p",[a("strong",[e._v("Pros:")])]),e._v(" "),a("ul",[a("li",[e._v("Efficient data retrieval for users, lite clients and other protocols")]),e._v(" "),a("li",[e._v("Easily implemented in supported languages (Go, Dart, JS, TS, rust, Elixir, Haskell, ...)")]),e._v(" "),a("li",[e._v("Defined schema with richer type system (Protocol Buffers)")]),e._v(" "),a("li",[e._v("Can use common schemas and types across all protocols and data stores (RPC, ABCI, blocks, etc)")]),e._v(" "),a("li",[e._v("Established conventions for forwards- and backwards-compatibility")]),e._v(" "),a("li",[e._v("Bi-directional streaming")]),e._v(" "),a("li",[e._v("Servers and clients are be autogenerated in many languages (e.g. Tendermint-rs)")]),e._v(" "),a("li",[e._v("Auto-generated swagger documentation for REST API")]),e._v(" "),a("li",[e._v("Backwards and forwards compatibility guarantees enforced at the protocol level.")]),e._v(" "),a("li",[e._v("Can be used with different codecs (JSON, CBOR, ...)")])]),e._v(" "),a("p",[a("strong",[e._v("Cons:")])]),e._v(" "),a("ul",[a("li",[e._v("Complex system involving cross-language schemas, code generation, and custom protocols")]),e._v(" "),a("li",[e._v("Type system does not always map cleanly to native language type system; integration woes")]),e._v(" "),a("li",[e._v("Many common types require Protobuf plugins (e.g. timestamps and duration)")]),e._v(" "),a("li",[e._v("Generated code may be non-idiomatic and hard to use")]),e._v(" "),a("li",[e._v("Migration will be disruptive and laborious")])]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("blockquote",[a("p",[e._v("This section explains all of the details of the proposed solution, including implementation details.\nIt should also describe affects / corollary items that may need to be changed as a part of this.\nIf the proposed change will be large, please also indicate a way to do the change to maximize ease of review.\n(e.g. the optimal split of things to do between separate PR's)")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("blockquote",[a("p",[e._v('A decision may be "proposed" if it hasn\'t been agreed upon yet, or "accepted" once it is agreed upon. If a later ADR changes or reverses a decision, it may be marked as "deprecated" or "superseded" with a reference to its replacement.')])]),e._v(" "),a("p"),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("blockquote",[a("p",[e._v('This section describes the consequences, after applying the decision. All consequences should be summarized here, not just the "positive" ones.')])]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("blockquote",[a("p",[e._v("Are there any relevant PR comments, issues that led up to this, or articles referenced for why we made the given design choice? If so link them here!")])]),e._v(" "),a("ul",[a("li")])])}),[],!1,null,null,null);t.default=r.exports}}]);