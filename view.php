<main>
    <div class="arena">
    <?php
    for($y=0; $y<30; $y++){
        for($x=0; $x<50; $x++){
            echo "<div class='box' id='x{$x}y{$y}'></div>";
        }
    }
    ?>
    </div>
    <div class="board">
        <div class="button-wrapper">
            <button id="start-button"><i class="fas fa-play"></i></button>
            <button id="stop-button"><i class="fas fa-pause"></i></button>
            <button id="reload-button"><i class="fas fa-redo"></i></button>
        </div>
        <div class="box length" style="float: left; margin-top: 6px; margin-left: 20px;">
            <span class="name">Boy:</span>
            <span class="value"></span>
        </div>
        <div class="box speed" style="float: left; margin-top: 6px; margin-left: 20px;">
            <span class="name">Hız:</span>
            <span class="value"></span>
        </div>
        <div class="box location" style="float: left; margin-top: 6px; margin-left: 20px;">
            <span class="name">Konum:</span>
            x<span class="x"></span>,
            y<span class="y"></span>
        </div>
        <div style="clear: both;"></div>
    </div>
</main>