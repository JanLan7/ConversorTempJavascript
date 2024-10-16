// Conversor de temperatura Celsius/Fahrenheit

alert("Conversor de Temperatura\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius\nElige una opción 1 o 2:");

seleccion = Number(prompt())

if (seleccion == 1){
    alert("Introduce la temperatura en Celsius")
    temperatura = Number(prompt())
    fahrenheit = (temperatura * 9 / 5) + 32
    alert("La temperatura en fahrenheit es: " + fahrenheit);    
} else if (seleccion == 2){
    alert("Introduce la temperatura en Fahrenheit: ")
    temperatura = Number(prompt())
    celsius = (temperatura - 32) * 5 / 9
    alert("La temperatura en Celsius es: " + celsius);    
}
alert("Eso es todo amigos 😁")

