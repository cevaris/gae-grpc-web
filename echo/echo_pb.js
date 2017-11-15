/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.net.k2lab.test.grpc.testing.echo.EchoRequest', null, global);
goog.exportSymbol('proto.net.k2lab.test.grpc.testing.echo.EchoResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.net.k2lab.test.grpc.testing.echo.EchoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.net.k2lab.test.grpc.testing.echo.EchoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.net.k2lab.test.grpc.testing.echo.EchoRequest.displayName = 'proto.net.k2lab.test.grpc.testing.echo.EchoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.net.k2lab.test.grpc.testing.echo.EchoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.net.k2lab.test.grpc.testing.echo.EchoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.net.k2lab.test.grpc.testing.echo.EchoRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.net.k2lab.test.grpc.testing.echo.EchoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.net.k2lab.test.grpc.testing.echo.EchoRequest}
 */
proto.net.k2lab.test.grpc.testing.echo.EchoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.net.k2lab.test.grpc.testing.echo.EchoRequest;
  return proto.net.k2lab.test.grpc.testing.echo.EchoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.net.k2lab.test.grpc.testing.echo.EchoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.net.k2lab.test.grpc.testing.echo.EchoRequest}
 */
proto.net.k2lab.test.grpc.testing.echo.EchoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.net.k2lab.test.grpc.testing.echo.EchoRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.net.k2lab.test.grpc.testing.echo.EchoRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.net.k2lab.test.grpc.testing.echo.EchoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.net.k2lab.test.grpc.testing.echo.EchoRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.net.k2lab.test.grpc.testing.echo.EchoRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.net.k2lab.test.grpc.testing.echo.EchoRequest.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.net.k2lab.test.grpc.testing.echo.EchoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.net.k2lab.test.grpc.testing.echo.EchoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.net.k2lab.test.grpc.testing.echo.EchoResponse.displayName = 'proto.net.k2lab.test.grpc.testing.echo.EchoResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.net.k2lab.test.grpc.testing.echo.EchoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.net.k2lab.test.grpc.testing.echo.EchoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.net.k2lab.test.grpc.testing.echo.EchoResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.net.k2lab.test.grpc.testing.echo.EchoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.net.k2lab.test.grpc.testing.echo.EchoResponse}
 */
proto.net.k2lab.test.grpc.testing.echo.EchoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.net.k2lab.test.grpc.testing.echo.EchoResponse;
  return proto.net.k2lab.test.grpc.testing.echo.EchoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.net.k2lab.test.grpc.testing.echo.EchoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.net.k2lab.test.grpc.testing.echo.EchoResponse}
 */
proto.net.k2lab.test.grpc.testing.echo.EchoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.net.k2lab.test.grpc.testing.echo.EchoResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.net.k2lab.test.grpc.testing.echo.EchoResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.net.k2lab.test.grpc.testing.echo.EchoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.net.k2lab.test.grpc.testing.echo.EchoResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.net.k2lab.test.grpc.testing.echo.EchoResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.net.k2lab.test.grpc.testing.echo.EchoResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.net.k2lab.test.grpc.testing.echo);
