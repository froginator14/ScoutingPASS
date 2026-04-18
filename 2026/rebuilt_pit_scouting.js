var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "pitConfig": "true",
  "prematch": [
   { "name": "Scouter Initials",
      "code": "Scouter Initials",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Team Number",
      "code": "Team Number",
      "type": "number",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Robot Name",
      "code": "Robot Name",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Width",
      "code": "Width",
      "type": "number",
      "defaultValue": "0"
    },
     { "name": "Length",
      "code": "Length",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "Weight",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "# of Robot Batteries <br>(Ex: 2604 has 8)",
      "code": "Number of Batteries",
      "type": "number"
    },
    { "name": "Climber",
      "code": "Climber",
      "type": "radio",
      "choices": {
        "L1": "L1<br>",
        "L2": "L2<br>",
        "L3": "L3<br>",
        "N/A": "No Climber"
      },
      "defaultValue":"N/A"
    },
     { "name": "Drivetrain",
      "code": "Drivetrain",
      "type": "radio",
      "choices": {
        "Swerve": "Swerve<br>",
        "Tank": "West Coast/Tank<br>",
        "Butterfly/Grasshopper": "Butterfly/Grasshopper<br>",
        "Mechanum": "Mechanum<br>",
        "Other": "Other"
      },
      "defaultValue": "Swerve"
    },
    { "name": "Other Drivetrain",
      "code": "Other Drivetrain",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio",
      "code": "Swerve Ratio",
      "type": "radio",
      "choices": {
        "L1": "L1 (8.14:1)<br>",
        "L2": "L2 (6.75:1)<br>",
        "L3": "L3 (6.12:1)<br>",
        "L4": "L4 (5.14:1)<br>",
        "OHT": "Other High Torque Ratio<br>",
        "OHS": "Other High Speed Ratio<br>",
        "N/A": "Not Swerve"
      },
      "defaultValue":"L2"
    },
    { "name": "Drivetrain Motor",
      "code": "Drive Motor",
      "type": "radio",
      "choices": {
        "Neo": "Neo<br>",
        "Kraken": "Kraken X60<br>",
        "CIM": "CIM<br>",
        "X": "Other<br>"
      },
      "defaultValue":"Kraken"
    },
    { "name": "Other Drivetrain Motor",
      "code": "Other Drive Motor",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Drivetrain Steer Motor",
      "code": "Steer Motor",
      "type": "radio",
      "choices": {
        "Neo": "Neo<br>",
        "Kraken X44": "Kraken X44<br>",
        "Kraken X60": "Kraken X60<br>",
        "CIM": "CIM<br>",
        "X": "Other<br>"
      },
      "defaultValue":"Kraken X44"
    },
      { "name": "Floor pickup Fuel",
      "code": "Floor Pickup",
      "type": "bool"
    },
    { "name": "Depot pickup Fuel <br>(Square box in our that has balls in it at start of the match)",
      "code": "Depot Pickup",
      "type": "bool"
    },
    { "name": "Outpost pickup Fuel <br>(Human Player Station)",
      "code": "Outpost Pickup",
      "type": "bool"
    },
    { "name": "Ball Capacity",
      "code": "Ball Capacity",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Ball Shot per Second",
      "code": "Ball Shot Speed",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Shooter Type",
      "code": "Shooter Type",
      "type": "radio",
      "choices": {
        "Turret": "Turret<br>",
        "Fixed": "Fixed<br>",
        "Other": "Other"
      },
      "defaultValue": "Other"
    },
    { "name": "Other Shooter Type",
      "code": "Other Shooter Type",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
      { "name": "Main Auton Description",
      "code": "Auton",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "code": "Scouting",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "What are you most proud of",
      "code": "Proud",
      "type": "text",
      "size": 50,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "Comments",
      "type": "text",
      "size": 50,
      "maxSize": 250
    }
  ],
  "auton": [

  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
