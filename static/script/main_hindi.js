var toolbox = {
	"kind": "categoryToolbox",
	"id": "toolbox-categories",
	"style": "display: none",
	"contents": [
		{
			"kind": "category",
			"name": "लॉजिक",
			"categorystyle": "logic_category",
			"contents": [
				{
					"kind": "block",
					"type": "controls_if"
				},
				{
					"kind": "block",
					"type": "logic_compare"
				},
				{
					"kind": "block",
					"type": "logic_operation"
				},
				{
					"kind": "block",
					"type": "logic_negate"
				},
				{
					"kind": "block",
					"type": "logic_boolean"
				},
				{
					"kind": "block",
					"type": "logic_null",
					"disabled": "true"
				},
				{
					"kind": "block",
					"type": "logic_ternary"
				}
			],
		},

		{
			"kind": "category",
			"name": "लूप",
			"categorystyle": "loop_category",
			"contents": [
				{
					"kind": "BLOCK",
					"type": "controls_repeat_ext"
				},
				{
					"kind": "BLOCK",
					"type": "controls_repeat",
					"disabled": "true"
				},
				{
					"kind": "BLOCK",
					"type": "controls_whileUntil"
				},
				{
					"kind": "BLOCK",
					"type": "controls_for"
				},
				{
					"kind": "BLOCK",
					"type": "controls_forEach"
				},
				{
					"kind": "BLOCK",
					"type": "controls_flow_statements"
				}
			],
		},

		{
            "kind": "category",
			"name": "गणित",
            "categorystyle": "math_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "math_number",
                    "gap": "32"
                },
                {
                    "kind": "block",
                    "type": "math_arithmetic"
                },
                {
                    "kind": "block",
                    "type": "math_single"
                },
                {
                    "kind": "block",
                    "type": "math_trig"
                },
                {
                    "kind": "block",
                    "type": "math_constant"
                },
                {
                    "kind": "block",
                    "type": "math_number_property"
                },
                {
                    "kind": "block",
                    "type": "math_round"
                },
                {
                    "kind": "block",
                    "type": "math_on_list"
                },
                {
                    "kind": "block",
                    "type": "math_modulo"
                },
                {
                    "kind": "block",
                    "type": "math_constrain"
                },
                {
                    "kind": "block",
                    "type": "math_random_int"
                },
                {
                    "kind": "block",
                    "type": "math_random_float"
                },
                {
                    "kind": "block",
                    "type": "math_atan2"
                }
            ]
        },
		{
            "kind": "category",
			"name": "शब्द रूप",
            "categorystyle": "text_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "text"
                },
                {
                    "kind": "block",
                    "type": "text_multiline"
                },
                {
                    "kind": "block",
                    "type": "text_join"
                },
                {
                    "kind": "block",
                    "type": "text_append"
                },
                {
                    "kind": "block",
                    "type": "text_length"
                },
                {
                    "kind": "block",
                    "type": "text_isEmpty"
                },
                {
                    "kind": "block",
                    "type": "text_indexOf"
                },
                {
                    "kind": "block",
                    "type": "text_charAt"
                },
                {
                    "kind": "block",
                    "type": "text_getSubstring"
                },
                {
                    "kind": "block",
                    "type": "text_changeCase"
                },
                {
                    "kind": "block",
                    "type": "text_trim"
                },
                {
                    "kind": "block",
                    "type": "text_count"
                },
                {
                    "kind": "block",
                    "type": "text_replace"
                },
                {
                    "kind": "block",
                    "type": "text_reverse"
                },
                {
                    "kind": "LABEL",
                    "text": "Input/Output:",
                    "web-class": "ioLabel"
                },
                {
                    "kind": "block",
                    "type": "text_print"
                },
                {
                    "kind": "block",
                    "type": "text_prompt_ext"
                }
            ]
        },

		{
            "kind": "category",
			"name": "सूची",
            "categorystyle": "list_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "lists_create_with"
                },
                {
                    "kind": "block",
                    "type": "lists_create_with"
                },
                {
                    "kind": "block",
                    "type": "lists_repeat"
                },
                {
                    "kind": "block",
                    "type": "lists_length"
                },
                {
                    "kind": "block",
                    "type": "lists_isEmpty"
                },
                {
                    "kind": "block",
                    "type": "lists_indexOf"
                },
                {
                    "kind": "block",
                    "type": "lists_getIndex"
                },
                {
                    "kind": "block",
                    "type": "lists_setIndex"
                },
                {
                    "kind": "block",
                    "type": "lists_getSublist"
                },
                {
                    "kind": "block",
                    "type": "lists_split"
                },
                {
                    "kind": "block",
                    "type": "lists_sort"
                },
                {
                    "kind": "block",
                    "type": "lists_reverse"
                }
            ],
        },

		{
            "kind": "category",
			"name": "रंग",
            "categorystyle": "colour_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "colour_picker"
                },
                {
                    "kind": "block",
                    "type": "colour_random"
                },
                {
                    "kind": "block",
                    "type": "colour_rgb"
                },
                {
                    "kind": "block",
                    "type": "colour_blend"
                }
            ],
        },

		{
            "kind": "SEP"
        },

        {
            "kind": "category",
            "name": "चर",
            "categorystyle": "variable_category",
            "custom": "VARIABLE"
        },

        {
            "kind": "category",
            "name": "समारोह",
            "categorystyle": "procedure_category",
            "custom": "PROCEDURE"
        }
	],
  }

var pythonCode;
var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});
workspace.addChangeListener(updateCode);


function updateCode(event) {
    pythonCode = Blockly.Python.workspaceToCode(workspace);
    document.getElementById('code-area').value = pythonCode;
}


$(document).ready(function(){
    $("button").click(function(){
      $.post("/", document.getElementById('code-area').value,
      function(data,status){
        document.getElementById('output-area').value = data;
      });
    });
});