Blockly.Blocks['i2c_motor_driver'] = {
    init: function () {
      this.jsonInit(
        {
            "type": "i2c_motor_driver",
            "message0": "quay động cơ %1 tốc độ %2 %3",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "motor",
                "options": [
                  [
                    "1",
                    "MD4C_REG_CH1"
                  ],
                  [
                    "2",
                    "MD4C_REG_CH2"
                  ],
                  [
                    "3",
                    "MD4C_REG_CH3"
                  ],
                  [
                    "4",
                    "MD4C_REG_CH4"
                  ]
                ]
              },
              {
                "type": "field_number",
                "name": "speed",
                "value": 0,
                "min": -100,
                "max": 100,
                "precision": 50
              },
              {
                "type": "input_dummy",
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
        Blockly.Python.definitions_['import_motor_driver'] = 'from i2c_motor_driver import *';
        var dropdown_motor = block.getFieldValue('motor');
        var number_speed = block.getFieldValue('speed');
        // TODO: Assemble Python into code variable.
        var code = 'set_motor(' + dropdown_motor + ','+ number_speed+ ')\n';
        return code;
      };
