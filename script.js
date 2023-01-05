$(document).ready(function(){
  $('.btn_edit').click(function(){
    let target = $(this).siblings('.player');
    console.log(target.attr('readonly'));
    if(target.attr('readonly') == 'readonly'){
      target.attr('readonly',false);
    }else {
      target.attr('readonly',true);
    }
  });
  
  let countP1 = 0;     let main1 = $('#main_score_p1'); 
  let runningP1 = 0;   let runP1 = $('#run_score_p1');
  let countP2 = 0;     let main2 = $('#main_score_p2')
  let runningP2 = 0;   let runP2 = $('#run_score_p2');
  let turn = 'p1';
  let p1 = $('#inp_p1');  
  let p2 = $('#inp_p2');
  $('.reset_game').click(function(){
    
    p1.val("PLAYER1");
    p2.val("PLAYER2");
    main1.text("00");
    main2.text("00");
    runP1.text('RUNNING : 0');
    runP2.text('RUNNING : 0');
    countP1 = 0;
    runningP1 = 0;
    countP2 = 0;
    runningP2 = 0;
    turn = 'p1';
    $('#modal_result').hide();
    $('#game_result').empty();
    $('#gtp1').show();
    $('#gtp2').hide();
  });
  function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  $('#result_dice').click(function(){
    $('#dice_img').addClass('throwDice');
  });
  $('#dice_img').on('animationend',function(){
    $(this).removeClass('throwDice');
    let nb = randomInt(1,6);
    if(turn == 'p1'){
      if(nb == 1){
        runningP1 = 0;
        turn = 'p2';
        $('#gtp1').hide();
        $('#gtp2').show();
        runP1.text('RUNNING : 0');
      }else if(nb > 1){
        runningP1 = runningP1+nb;
        runP1.text('RUNNING : '+runningP1);
      }
    }else if(turn == 'p2'){
      if(nb == 1){
        runningP2 = 0;
        turn = 'p1';
        $('#gtp1').show();
        $('#gtp2').hide();
        runP2.text('RUNNING : 0');
      }else if(nb > 1){
        runningP2 = runningP2+nb;
        runP2.text('RUNNING : '+runningP2);
      }
    }
    $('#dice_img').attr("src","./svg/dice"+nb+".svg");
  });
  $('.save_score').click(function(){
    if(turn == 'p1'){
      if(countP1+runningP1 < 100){
        countP1 = countP1+runningP1;
        $('#gtp1').hide();
        $('#gtp2').show();
      }else{
        countP1 = countP1+runningP1;
        $('#modal_result').fadeIn(400);
        $('#game_result').text('Félicitations '+p1.val()+' ! Vous remportez cette partie ! ')
      }
      runningP1 = 0;
      runP1.text('RUNNING : 0');
      main1.text(countP1);
      turn = 'p2';
    }else if(turn == 'p2'){
      if(countP2+runningP2 < 100){
        countP2 = countP2+runningP2;
        $('#gtp1').show();
        $('#gtp2').hide();
      }else{
        countP2 = countP2+runningP2;
        $('#modal_result').fadeIn(400);
        $('#game_result').text('Félicitations '+p2.val()+' ! Vous remportez cette partie !')
      }
      runningP2 = 0;
      runP2.text('RUNNING : 0');
      main2.text(countP2);
      turn = 'p1';
    }
  });
});
$(document).ready(function(){
  $('.save_score').on('mouseenter',function(){
    $(this).children('.bg').show(0);
  });
  $('.save_score').on('mouseleave',function(){
    $(this).children('.bg').fadeOut(100);
  });
});


