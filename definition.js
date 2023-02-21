Blockly.Blocks['i2c_motor_driver'] = {
    init: function () {
      this.jsonInit(
        {
            "type": "i2c_motor_driver",
            "message0": "quay động cơ %1 tốc độ %2 (từ -100 đến 100)",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "motor",
                "options": [
                  [
                    "1",
                    "0"
                  ],
                  [
                    "2",
                    "1"
                  ],
                  [
                    "3",
                    "2"
                  ],
                  [
                    "4",
                    "3"
                  ]
                ]
              },
              {
                "type": "input_value",
                "name": "speed",
                "value": 0,
                "min": -100,
                "max": 100,
                "precision": 50
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#cb2026",
            "tooltip": "",
            "helpUrl": ""
          }
      );
        }
    };

    Blockly.Python['i2c_motor_driver'] = function(block) {
        Blockly.Python.definitions_['import_display'] = 'from yolobit import *';
        Blockly.Python.definitions_['import_machine'] = 'import machine';
        Blockly.Python.definitions_['import_motor_driver'] = 'from i2c_motor_driver import MotorDriver4Channel';
        Blockly.Python.definitions_['create_motor_driver'] = 'driver = MotorDriver4Channel(machine.SoftI2C(sda=Pin(21),scl=Pin(22),freq=400000))\n';
        var dropdown_motor = block.getFieldValue('motor');
        var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = 'driver.set_motor(' + dropdown_motor + ','+ speed+ ')\n';
        return code;
};

Blockly.Blocks['i2c_motor_stop'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "i2c_motor_stop",
        "message0": "dừng di chuyển",
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['i2c_motor_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'driver.set_motors(0)';
  return code;
};

Blockly.Blocks['i2c_motor_delay'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "i2c_motor_delay",
        "message0": "quay động cơ %1 với tốc độ %2 (0-100) trong %3 giây",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "direction",
            "options": [
              [
                "1",
                "0"
              ],
              [
                "2",
                "1"
              ],
              [
                "3",
                "2"
              ],
              [
                "4",
                "3"
              ]
            ]
          },
          {
            min: 0,
            type: "input_value",
            check: "Number",
            value: 50,
            name: "speed",
          },
          {
            min: 0,
            type: "input_value",
            check: "Number",
            name: "time",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["i2c_motor_delay"] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_motor_driver'] = 'from i2c_motor_driver import MotorDriver4Channel';
  Blockly.Python.definitions_['create_motor_driver'] = 'driver = MotorDriver4Channel(machine.SoftI2C(sda=Pin(21),scl=Pin(22),freq=400000))\n';
  var motor = block.getFieldValue('motor');
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'driver.set_motor(' + motor + ',' + speed + ", " + time + ')\n';
  return code;
};

Blockly.Blocks['i2c_move_motor'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "i2c_move_motor",
        "message0": "quay động cơ 1 tốc độ %1 động cơ 2 %2 động cơ 3 %3 động cơ 4 %4 (-100 đến 100)",
        "args0": [
          {
            "type": "input_value",
            "name": "motor1",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "motor2",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "motor3",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "motor4",
            "check": "Number",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["i2c_move_motor"] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_motor_driver'] = 'from i2c_motor_driver import MotorDriver4Channel';
  Blockly.Python.definitions_['create_motor_driver'] = 'driver = MotorDriver4Channel(machine.SoftI2C(sda=Pin(21),scl=Pin(22),freq=400000))\n';
  var motor1 = Blockly.Python.valueToCode(block, 'left_wheel_speed', Blockly.Python.ORDER_ATOMIC);
  var motor2 = Blockly.Python.valueToCode(block, 'right_wheel_speed', Blockly.Python.ORDER_ATOMIC);
  var motor3 = Blockly.Python.valueToCode(block, 'left_wheel_speed', Blockly.Python.ORDER_ATOMIC);
  var motor4 = Blockly.Python.valueToCode(block, 'right_wheel_speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'driver.set_motor(0,'+ motor1+ ')\n' + 'driver.set_motor(1,'+ motor2+ ')\n'+ 'driver.set_motor(2,'+ motor3+ ')\n'+ 'driver.set_motor(3,'+ motor4+ ')\n';
  return code;
};