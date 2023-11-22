 <canvas id="myCanvas" width="500" height="500" style="border:1px solid #000;"></canvas>

  <script>
var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    
       // Treetopp
    context.fillStyle = "#228B22"; // Velger fargen ForestGreen - bruker fargekoden over
    context.fillRect(250, 50, 50, 20);

 
  // Forsetter å bygge tretoppene
    context.fillStyle = "#228B22"; 
    context.fillRect(225, 70, 100, 30);
    context.fillRect(200, 100, 150, 40);
    context.fillRect(175, 140, 200, 50);
    context.fillRect(150, 190, 250, 60);
    context.fillRect(125, 250, 300, 80);
    context.fillRect(100, 330, 350, 100);
    
    
    // Setter til slutt inn stammen, bruker fargen saddle brown
    context.fillStyle = "#8B4513"; 
    context.fillRect(250, 430, 40, 40);
    
   
<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <!-- Stammen til juletreet -->
    <rect x="250" y="430" width="40" height="40" fill="brown" />

    <!-- Bygger opp treet av 7 rektangler -->
    <rect x="250" y="50" width="50" height="20" fill="green" />
    
    <rect x="225" y="70" width="100" height="30" fill="green" />
    
    <rect x="200" y="100" width="150" height="40" fill="green" />
    
    <rect x="175" y="140" width="200" height="50" fill="green" />
    
    <rect x="150" y="190" width="250" height="60" fill="green" />
    <rect x="125" y="250" width="300" height="80" fill="green" />
    <rect x="100" y="330" width="350" height="100" fill="green" />
    

</svg>
