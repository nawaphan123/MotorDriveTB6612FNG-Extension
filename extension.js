({
    name: "MotorDriver", // Category Name
    description: "MOTOR DRIVER TB6612FNG for every board and use only 4 pin(PWM)",
    author: "Nawa Phansaen",
    category: "Device Control",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#d63838", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: '<label text="For Setup Motor Driver"></label>',
        },
        {
            xml: `
                <block type="motor_setup">
                    <value name="M1A">
                        <shadow type="math_number">
                            <field name="NUM">2</field>
                        </shadow>
                    </value>
                    <value name="M1B">
                        <shadow type="math_number">
                            <field name="NUM">4</field>
                        </shadow>
                    </value>
                    <value name="M2A">
                        <shadow type="math_number">
                            <field name="NUM">16</field>
                        </shadow>
                    </value>
                    <value name="M2B">
                        <shadow type="math_number">
                            <field name="NUM">17</field>
                        </shadow>
                    </value>
                </block>
            `
        },{
            xml: '<label text="For Moving Motor"></label>',
        },
        {
            xml: `
                <block type="motor_forward">
                    <value name="fd_speed">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="motor_backward">
                    <value name="bk_speed">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="motor_spinLeft">
                    <value name="sl_speed">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="motor_spinRight">
                    <value name="sr_speed">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "motor_stop",
    ]
});
