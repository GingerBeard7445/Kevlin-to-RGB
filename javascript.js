// Edited by Philip Hepppeler, for future use in web applications
// Math and Psuedocode by Tanner Helland: http://www.tannerhelland.com/4435/convert-temperature-rgb-algorithm-code/

// Start with a temperature, in Kelvin, somewhere between 1000 and 40000.  (Other values may work, but I can't make any promises about the quality of the algorithm's estimates above 40000 K.) Note also that the temperature and color variables need to be declared as floating-point.



// Javascript dependencies

var app = Application.currentApplication();
app.includeStandardAdditions = true;



// Define temperature with default value of 5000k, and other variables

var temperature = 5000, input = 0, inputData = 0, red = 0, green = 0, blue = 0, redPercent = 0, greenPercent = 0, bluePercent = 0;

input = app.displayDialog("Enter a Tempurature in Kelvin", {
	defaultAnswer: "",
	withIcon: "note",
	buttons: ["Cancel", "Continue"],
	defaultButton: "Continue"
});

inputData = (input.textReturned);

temperature = inputData / 100;



// Calculate Red

if (temperature < 67) {
	red = 255;
	
} else {
	red = temperature - 60;
	red = 329.698727446 * (red ^ -0.1332047592);
	
	if (red < 0) {
		red = 0;
	};
	
	if (red > 255) {
		red = 255;
	};
};



// Calculate Green

if (temperature < 67) {
	green = temperature;
	green = 99.4708025861 * (Math.log(green)) - 161.1195681661;
	
	if (green < 0) {
		green = 0;
	};
	
	if (green > 255) {
		green = 255;
	};
} else {
	green = temperature - 60;
	green = 288.1221695283 * (green ^ -0.0755148492);
	
	if (green < 0) { 
		green = 0;
	};
	
	if (green > 255) {
		green = 255;
	};
};



// Calculate Blue

if (temperature > 65) {
	blue = 255;
	
} else {
	if (temperature < 20) {
		blue = 0;
		
	} else {
		blue = temperature - 10;
		blue = 138.5177312231 * (Math.log(blue)) - 305.0447927307;
		
		if (blue < 0) {
			blue = 0;
		};
		
		if (blue > 255) {
			blue = 255;
		};
	};
};



// Round values

red = Math.round(red);
green = Math.round(green);
blue = Math.round(blue);



// Calculate percentages

redPercent = (red/255) * 100;
redPercent = Math.round(redPercent);

greenPercent = (green/255) * 100;
greenPercent = Math.round(greenPercent);

bluePercent = (blue/255) * 100;
bluePercent = Math.round(bluePercent);



// Display results

app.displayDialog(inputData + "K" + "\n" +
				  "--------------------------------------------------------------" + "\n" +
				  "Color"   + "\t" + "Hex" + "\t\t" + "Percentage" + "\n" +
				  "--------------------------------------------------------------" + "\n" +
				  "Red: "   + "\t" + red   + "\t\t" + redPercent + "%" + "\n" +
				  "Green: " + "\t" + green + "\t\t" + greenPercent + "%" + "\n" +
				  "Blue: "  + "\t" + blue  + "\t\t" + bluePercent + "%");
