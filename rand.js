function SugarUp() {
    let DarkChoco = Math.ceil(Math.random() * 20);
    let Biscoff = Math.ceil(Math.random() * 20);
    let Caramel = Math.ceil(Math.random() * 20);

    let highestStat = Math.max(DarkChoco, Biscoff, Caramel);
    let strongestAttribute = [];

    if (highestStat === DarkChoco) strongestAttribute.push("Dark Choco");
    if (highestStat === Biscoff) strongestAttribute.push("Biscoff");
    if (highestStat === Caramel) strongestAttribute.push("Caramel");

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let topping = DarkChoco <= 26 ? alphabet[DarkChoco - 1] : "(Secret topping)";

    let totalMinutes = Biscoff * Caramel;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    let sugar = `<p>Fever Flavor - Dark Choco: ${DarkChoco}, Biscoff: ${Biscoff}, Caramel: ${Caramel}</p>`;
    sugar += `<p>Your sweetest fever flavor is: ${strongestAttribute.join(", ")} (${highestStat})</p>`;
    sugar += `<p>You unlocked a secret topping: ${topping}</p>`;
    sugar += `<p>Floating time: ${totalMinutes} minutes (${hours} hours and ${minutes} minutes).</p>`;

    let sugarElement = document.getElementById("sugar");
    if (sugarElement) {
        sugarElement.innerHTML = sugar;
    } else {
        console.error("Element with ID 'sugar' not found.");
    }
}
