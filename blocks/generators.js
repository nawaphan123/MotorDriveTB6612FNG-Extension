Blockly.Python['motor_setup'] = function(block) {
  Blockly.Python.definitions_['import_motor'] = 'from motor import Motor';


  var pin_M1A = Blockly.Python.valueToCode(block, 'M1A', Blockly.Python.ORDER_ATOMIC);
  var pin_M1B = Blockly.Python.valueToCode(block, 'M1B', Blockly.Python.ORDER_ATOMIC);
  var pin_M2A = Blockly.Python.valueToCode(block, 'M2A', Blockly.Python.ORDER_ATOMIC);
  var pin_M2B = Blockly.Python.valueToCode(block, 'M2B', Blockly.Python.ORDER_ATOMIC);
  var code = `m = Motor(${pin_M1A},${pin_M1B},${pin_M2A},${pin_M2B})\n`;
  return code;
};
Blockly.Python['motor_forward'] = function(block) {
  Blockly.Python.definitions_['import_motor'] = 'from motor import Motor';
  var speed = Blockly.Python.valueToCode(block, 'fd_speed', Blockly.Python.ORDER_ATOMIC);
  var code = `m.fd(${speed})\n`;
  return code;
};
Blockly.Python['motor_backward'] = function(block) {
  Blockly.Python.definitions_['import_motor'] = 'from motor import Motor';
  var speed = Blockly.Python.valueToCode(block, 'bk_speed', Blockly.Python.ORDER_ATOMIC);
  var code = `m.fd(${-speed})\n`;
  return code;
};
Blockly.Python['motor_spinLeft'] = function(block) {
  Blockly.Python.definitions_['import_motor'] = 'from motor import Motor';
  var speed = Blockly.Python.valueToCode(block, 'sl_speed', Blockly.Python.ORDER_ATOMIC);
  var code = `m.sl(${speed})\n`;
  return code;
};
Blockly.Python['motor_spinRight'] = function(block) {
  Blockly.Python.definitions_['import_motor'] = 'from motor import Motor';
  var speed = Blockly.Python.valueToCode(block, 'sr_speed', Blockly.Python.ORDER_ATOMIC);
  var code = `m.sr(${speed})\n`;
  return code;
};
Blockly.Python['motor_stop'] = function(block) {
  Blockly.Python.definitions_['import_motor'] = 'from motor import Motor';
  var code = `m.stop()\n`;
  return code;
};
