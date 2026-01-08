let colors = ["red", "green", "blue", "pink", "orange", "white", "yellow"];

colors.slice();
colors.slice(2);
colors.slice(1, 3);
colors.slice(-2);
colors.slice(-5);
colors.slice(10); // returns empty array
colors.slice(colors.length);



//splice - used to remove,replace,add element in place

colors.splice(4);
colors

colors.splice(0,1);
colors

colors.splice(0, 1, "black", "grey");
colors

colors.splice(2, 1, "skyblue", "babypink");
colors