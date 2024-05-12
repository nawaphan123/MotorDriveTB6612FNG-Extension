Blockly.defineBlocksWithJsonArray([
  {
    "type": "motor_setup",
    "message0": "Setup Motor M1A %1 | M1B %2 | M2A %3 | M2B %4 |",
    "args0": [
      {
        "type": "input_value",
        "name": "M1A",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "M1B",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "M2A",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "M2B",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#d63838",
    "tooltip": "Setup Motor Driver",
    "helpUrl": ""
  },{
    "type": "motor_forward",
    "message0": "Move Forward Speed %1 %",
    "args0": [
      {
        "type": "input_value",
        "name": "fd_speed",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#d63838",
    "tooltip": "",
    "helpUrl": ""
  },{
    "type": "motor_backward",
    "message0": "Move Backward Speed %1 %",
    "args0": [
      {
        "type": "input_value",
        "name": "bk_speed",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#d63838",
    "tooltip": "",
    "helpUrl": ""
  }
  ,{
    "type": "motor_spinLeft",
    "message0": "Spin Left ↺ Speed %1 %",
    "args0": [
      {
        "type": "input_value",
        "name": "sl_speed",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#d63838",
    "tooltip": "",
    "helpUrl": ""
  },{
    "type": "motor_spinRight",
    "message0": "Spin Right ↻ Speed %1 %",
    "args0": [
      {
        "type": "input_value",
        "name": "sr_speed",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#d63838",
    "tooltip": "",
    "helpUrl": ""
  }
  ,{
    "type": "motor_stop",
    "message0": "Stop Moving",
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#d63838",
    "tooltip": "",
    "helpUrl": ""
  }
  
]);
