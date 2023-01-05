<?php 

?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Mini-Jeux</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./style.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap&family=Outfit&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.2.min.js" integrity="sha256-2krYZKh//PcchRtd+H+VyyQoZ/e3EcrkxhM8ycwASPA="crossorigin="anonymous">
    </script>
  </head>
  <body>
    <div class="global_container">
      <div class="container_left container">
        <div class="player_container">
          <button type="button" class="btn_edit"><i class="fa-solid fa-pen-to-square"></i></button>
          <input class="player" value="PLAYER 1" id="inp_p1" readonly maxlength="12"></p>
          <a class="got_turn" id="gtp1"><i class="fa-solid fa-hand"></i></a>
        </div>
        <p id="main_score_p1" class="player_score">00</p>
        <p id="run_score_p1" class="running_score">RUNNING : 0</p>
      </div>
      <div class="container_right container">
        <div class="player_container">
          <a class="got_turn" id="gtp2" style="display: none;"><i class="fa-solid fa-hand"></i></a>
          <input class="player" value="PLAYER 2" id="inp_p2" readonly maxlength="12"></p>
          <button type="button" class="btn_edit"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
        <p id="main_score_p2" class="player_score">00</p>
        <p id="run_score_p2" class="running_score">RUNNING : 0</p>
      </div>
      <div class="container_action">
        <div class="new_game_wrap">
          <svg height="30" width="160" >
            <rect class="shape" height="30" width="160" />
            <p class="reset_game"><i class="fa-solid fa-square-plus" style="color: #f63719;"></i> NEW GAME</p>
          </svg>
        </div>
        <div class="dice_wrap">
          <div id="result_dice" data-target="#main_score_p1">
            <img src="./svg/dice2.svg" id="dice_img">
          </div>
        </div>
        <div class="save_score">
          <div class="bg" style="display:none;"></div>
          <p class="hold"><i class="fa-solid fa-floppy-disk" style="color: #f63719;"></i> SAVE SCORE</p>
        </div>
      </div>
    </div>
    
    <div id="modal_result" style="display: none;">
      <p class="game_res">FIN DE PARTIE !</p>
      <p id="game_result" class="game_res"></p>
      <p class="game_res"> Cliquez sur NEW GAME pour relancer</p>
    </div>
    <script src="./script.js"></script>
  </body>
</html>