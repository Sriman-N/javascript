/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const deskSetup = {
    laptop: "Asus Vivobook 15 pro",
    monitor: "LG 27-inch Monitor",
    keyboard: "Razer Chroma Ornata",
    mouse: "Redragon M711 Cobra",
    ipad: "Ipad 9th Generation",
    table: {
        length: 4.5,
        width: 2.5,
    },
}

console.log("Table length and width (in ft):", "Length:", deskSetup.table.length, "Width:", deskSetup.table.width)
console.log("Prints monitor:", deskSetup.monitor)
console.log("Prints keyboard and Mouse:", deskSetup.keyboard, deskSetup.mouse)
