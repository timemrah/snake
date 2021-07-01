

<main>
<?php
for($y=0; $y<30; $y++){
    for($x=0; $x<50; $x++){
        echo "<div class='box' id='x{$x}y{$y}'></div>";
    }
}
?>
    <div class="board">
        <div style="float: left;">
            <button style="margin: 0;" id="start-button">Başla</button>
            <button style="margin: 0;" id="stop-button">Durdur</button>
        </div>
        <div class="speed" style="float: left; margin-top: 6px; margin-left: 20px;">Hız: <span class="value"></span></div>
        <div class="location" style="float: left; margin-top: 6px; margin-left: 20px;">
            Konum:
            <span class="x"></span>,
            <span class="y"></span>
        </div>
        <div style="clear: both;"></div>
    </div>
</main>