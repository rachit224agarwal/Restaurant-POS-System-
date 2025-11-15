export const getRandomBG = () => {
 const colors =  ["#FF6F61", 
"#0077B6",  
"#6A0DAD",  
"#98FF98",  
"#FF4500",  
"#8D99AE",  
"#FFD700",  
"#008080",  
"#4169E1",  
"#FFC0CB",  
"#228B22",  
"#36454F",  
"#C7EA46",  
"#87CEEB",  
"#800020",  
"#F4A261",  
"#2A9D8F",  
"#E76F51",  
"#264653",  
"#A8DADC",
];
return colors[Math.floor(Math.random() * colors.length)];

}