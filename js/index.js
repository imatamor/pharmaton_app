var click = 0;
$(function(){
	if (click < 1){
		$('#centro').css('display', 'none');
		$('#izquierda').css('display', 'none');
		$('#pdf').css('display', 'none');
	}
	$('#fondo').click(function(){
		$('#izquierda').fadeIn();
		$('#pdf').fadeIn();
		if (click <= 19){click++;}
		if (click == 1){
			$('#fondo_kiddi').addClass('fadeIn');
			$('#fondo_vital').addClass('fadeIn');
		}
		if (click == 2){
			$('#botella-kiddi').addClass('fadeIn');
			setTimeout( function() {$('#botella-kiddi').addClass('fadeIn_rotate_bote')}, 50);
		}
		if (click == 3){$('#potencia-title').addClass('fadeIn');}	
		if (click == 4){$('#potencia-parraf').addClass('fadeIn');}
		if (click == 5){$('#crayon_1').addClass('fadeIn');}
		if (click == 6){$('#crayon_2').addClass('fadeIn');}
		if (click == 7){$('#crayon_3').addClass('fadeIn');}
		if (click == 8){
			$('#porcentaje').addClass('fadeIn');
			setTimeout( function() {$('#porcentaje').addClass('fadeIn_rotate_porc')}, 50);
		}
		if (click == 9){$('#logo_kiddi').addClass('fadeIn');}
		if (click == 10){$('#texto_exig').addClass('fadeIn');}
		if (click == 11){$('#texto_conq').addClass('fadeIn');}
		if (click == 12){$('#texto_adem').addClass('fadeIn');}
		if (click == 13){$('#texto_hijo').addClass('fadeIn');}
		if (click == 14){$('#botellas').addClass('fadeIn');}
		if (click == 15){$('#valor').addClass('fadeIn');}
		if (click == 16){$('#toma').addClass('fadeIn');}
		if (click == 17){$('#logo').addClass('fadeIn');}
		if (click == 18){$('#texto_legal').addClass('fadeIn');}
		if (click == 19){$('#centro').fadeIn();}
	});
	$('#derecha').click(function(){
		$('#izquierda').fadeIn();
		$('#pdf').fadeIn();
		if (click <= 19){click++;}
		if (click == 1){
			$('#fondo_kiddi').addClass('fadeIn');
			$('#fondo_vital').addClass('fadeIn');
		}
		if (click == 2){
			$('#botella-kiddi').addClass('fadeIn');
			setTimeout( function() {$('#botella-kiddi').addClass('fadeIn_rotate_bote')}, 50);
		}
		if (click == 3){$('#potencia-title').addClass('fadeIn');}	
		if (click == 4){$('#potencia-parraf').addClass('fadeIn');}
		if (click == 5){$('#crayon_1').addClass('fadeIn');}
		if (click == 6){$('#crayon_2').addClass('fadeIn');}
		if (click == 7){$('#crayon_3').addClass('fadeIn');}
		if (click == 8){
			$('#porcentaje').addClass('fadeIn');
			setTimeout( function() {$('#porcentaje').addClass('fadeIn_rotate_porc')}, 50);
		}
		if (click == 9){$('#logo_kiddi').addClass('fadeIn');}
		if (click == 10){$('#texto_exig').addClass('fadeIn');}
		if (click == 11){$('#texto_conq').addClass('fadeIn');}
		if (click == 12){$('#texto_adem').addClass('fadeIn');}
		if (click == 13){$('#texto_hijo').addClass('fadeIn');}
		if (click == 14){$('#botellas').addClass('fadeIn');}
		if (click == 15){$('#valor').addClass('fadeIn');}
		if (click == 16){$('#toma').addClass('fadeIn');}
		if (click == 17){$('#logo').addClass('fadeIn');}
		if (click == 18){$('#texto_legal').addClass('fadeIn');}
		if (click == 19){$('#centro').fadeIn();}
	});
	$('#izquierda').click(function(){
		if (click == 1){
			$('#pdf').fadeOut();
			$('#izquierda').fadeOut();
			$('#fondo_kiddi').removeClass('fadeIn');
			$('#fondo_vital').removeClass('fadeIn');
		}
		if (click == 2){
			$('#botella-kiddi').removeClass('fadeIn_rotate_bote');
			setTimeout( function() {$('#botella-kiddi').removeClass('fadeIn');}, 1100);
		}
		if (click == 3){$('#potencia-title').removeClass('fadeIn');}	
		if (click == 4){$('#potencia-parraf').removeClass('fadeIn');}
		if (click == 5){$('#crayon_1').removeClass('fadeIn');}
		if (click == 6){$('#crayon_2').removeClass('fadeIn');}
		if (click == 7){$('#crayon_3').removeClass('fadeIn');}
		if (click == 8){
			$('#porcentaje').removeClass('fadeIn_rotate_porc');
			setTimeout( function() {$('#porcentaje').removeClass('fadeIn');}, 1100);
		}
		if (click == 9){$('#logo_kiddi').removeClass('fadeIn');}
		if (click == 10){$('#texto_exig').removeClass('fadeIn');}
		if (click == 11){$('#texto_conq').removeClass('fadeIn');}
		if (click == 12){$('#texto_adem').removeClass('fadeIn');}
		if (click == 13){$('#texto_hijo').removeClass('fadeIn');}
		if (click == 14){$('#botellas').removeClass('fadeIn');}
		if (click == 15){$('#valor').removeClass('fadeIn');}
		if (click == 16){$('#toma').removeClass('fadeIn');}
		if (click == 17){$('#logo').removeClass('fadeIn');}
		if (click == 18){$('#texto_legal').removeClass('fadeIn');}
		if (click == 19){$('#centro').fadeOut();}
		if ((click > 0)&&(click <= 19)){click--;}
	});
	$('#centro').click(function(){
		if (click == 19){
			$('#centro').fadeOut();
			click--;
			if (click == 18){
				$('#texto_legal').removeClass('fadeIn');
				click--;
				if (click == 17){
					$('#logo').removeClass('fadeIn');
					click--;
					if (click == 16){
						$('#toma').removeClass('fadeIn');
						click--;
						if (click == 15){
							$('#valor').removeClass('fadeIn');
							click--;
							if (click == 14){
								$('#botellas').removeClass('fadeIn');
								click--;
								if (click == 13){
									$('#texto_hijo').removeClass('fadeIn');
									click--;
									if (click == 12){
										$('#texto_adem').removeClass('fadeIn');
										click--;
										if (click == 11){
											$('#texto_conq').removeClass('fadeIn');
											click--;
											if (click == 10){
												$('#texto_exig').removeClass('fadeIn');
												click--;
												if (click == 9){
													$('#logo_kiddi').removeClass('fadeIn');
													click--;
													if (click == 8){
														$('#porcentaje').removeClass('fadeIn');
														click--;
														if (click == 7){
															$('#crayon_3').removeClass('fadeIn');
															click--;
															if (click == 6){
																$('#crayon_2').removeClass('fadeIn');
																click--;
																if (click == 5){
																	$('#crayon_1').removeClass('fadeIn');
																	click--;
																	if (click == 4){
																		$('#potencia-parraf').removeClass('fadeIn');
																		click--;
																		if (click == 3){
																			$('#potencia-title').removeClass('fadeIn');
																			click--;
																			if (click == 2){
																				$('#botella-kiddi').removeClass('fadeIn');
																				click--;
																				if (click == 1){
																					$('#fondo_kiddi').removeClass('fadeIn');
																					$('#fondo_vital').removeClass('fadeIn');
																					click--;
																					if (click == 0){
																						$('#pdf').fadeOut();
																						$('#izquierda').fadeOut();
																						click--;
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}	
			}
		}						
	});

	$('#pdf').click(function(){
		Modal();
	});
});

function Modal(){
    var modal = document.getElementById('myModal_preguntaNew');
    modal.style.display = "block";
    var span = document.getElementsByClassName("close_pregunta")[0];
    span.onclick = function() {modal.style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal) { modal.style.display = "none"; }
    }
}