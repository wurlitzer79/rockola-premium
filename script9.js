		const movies = [
		  { cat: 'Infantil Varios', title: 'Kubo y la Búsqueda Samurái<br>2016',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZTY0NDEyNzAtODc5Yy00ZDhhLTgxMTctMjg4YTM3ZDhiYjY0XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/4ba-07df-84fb-131753bc-8c-4b-1a-235473ac-755c-51842e-0d-7c-9a-94334e-5face-29c-3/4ba07df84fb131753bc8c4b1a235473ac755c51842e0d7c9a94334e5face29c3.mp4'
		  }	
		 ,{ cat: 'Infantil Varios', title: 'Monster University<br>2013', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNzkxMzBhMDUtMmVmNy00MWEzLWIyYjItYmYzOGZlNDEyYWE1XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/5507f-7c-7c-144f-95f-280ae-07b-36e-67162-1080p_202507/5507f7c7c144f95f280ae07b36e67162-1080p.mp4'
		  }	 		
		 ,{ cat: 'Infantil Varios', title: 'Bambi', 
			thumb: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuuFcuDnPQiCfEwmRSSsdtOcFdI6-H6khZepIQL-f2fVMFEh8T0DlGR0RLMo-8aSKMmxAyQQAQEDT5Nc8uZ4qEIp20nOROwfPYbe1yOpPufOEzSBRsEU3JxPXlglLFOAT8dYIWS2SAmeGQk1yxESZiNiBL1TWJpNjGPJSJl2uoCPQD94NYT1Nmb_Ml/s1145/Bambi%201.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BAMBI%201.mp4'
		  }	 
		 ,{ cat: 'Infantil Varios', title: 'Bichos', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMzRmZmZkZjctMmJiOS00MTFiLTg2YmUtY2E3ZjZiZjA2MzA0XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BICHOS.mp4'
		  }	  
		 ,{ cat: 'Infantil Varios', title: 'Chico Bon Bon Un Mono con Herramientas', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMGJlOWFkMGItMWUzMi00ZjU1LWE3OWQtNjkzMDYwOTgzY2JmXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/CHICO%20BOM%20BOM.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Dino Time', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTYzOTM3NjY4MF5BMl5BanBnXkFtZTcwMzMzMDY2OA@@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/DINO%20TIME.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'El Lorax', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYTRhYTBkNjgtOTVjNi00OTZmLWJlMWYtNWRkZDJiMmVmMDEwXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/EL%20LORAX.mp4'
		  }
		 ,{ cat: 'Infantil Varios', title: 'El Espanta Tiburones', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTMxMjY0NzE2M15BMl5BanBnXkFtZTcwNTc3ODcyMw@@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/ESPANTATIBURONES.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Ferdinand', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMjI4Mjk0NzQwOF5BMl5BanBnXkFtZTgwNjg3MjI2MjI@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/FERDINAND.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Intensamente', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTk4ZDdmMjYtNzE4Zi00NjhjLThkY2ItYTc4NDY5MzQzNWRkXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/INTENSAMENTE.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Jorge El Curioso', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNmJlNjIxMjItODliMC00MjYzLWEyMGItZTA2MGM2YjgxMDlmXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/JORGE%20EL%20CURIOSO.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Juego de Gemelas', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDhiZTA1YTgtNmZkMi00ZWY5LTg3MzEtOTk0YzkxNDJjMWQ0XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/JUEGO%20DE%20GEMELAS.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Klara Y El ladrón de Manzanas', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZmI0YTExNDItODVkOC00MjY2LTllMDEtYThlNzAzNDdkNGUyXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/KLARA%20LA%20VACA%20CUIDADORA%20DE%20MANZANAS.mp4'
		  }	  	
		 ,{ cat: 'Infantil Varios', title: 'La Familia del Futuro', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BOTI0ZDkwYWUtNjQxOC00YTM1LTk3ODUtZDQ0YjhiYTI1ZDg1XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20FAMILIA%20DEL%20FUTURO.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'El Ritmo de la Selva', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BODNhMWQ4ZTAtZDEzZi00YTdjLThkYzMtMTdhNzhkNWVkY2ZlXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20JUNGLA.mp4'
		  }
		 ,{ cat: 'Infantil Varios', title: 'La Vida Secreta de tus Mascotas',
			thumb: 'https://m.media-amazon.com/images/M/MV5BMjIzMzA1OTkzNV5BMl5BanBnXkFtZTgwODE3MjM4NzE@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20VIDA%20SECRETA%20DE%20MIS%20MASCOTAS.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Lejos del Arbol', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYTZlYjE0ODAtMGUwMy00N2EyLWFjZDUtODIzNDdmNWQ4ZWMyXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LEJOS%20DEL%20ARBOL.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Los Tipos Malos', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMWMxZGY3OTMtMmJhNy00YWM0LTg4Y2EtMDI2MDM5Mjk5NzgwXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOS%20TIPOS%20MALOS.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Norman del Norte', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNTFmNWNjZjAtNTE4Mi00YTZlLTk1NGMtMTUwY2EwYWI5NGYyXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/NORM%20DEL%20NORTE.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Ozzy Rapido y Peludo', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjkyNzlmNDctODBiMy00MDhmLTlmYTktZjI3MzZmNjYzODhmXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/OZZY%20RAPIDO%20Y%20PELUDO.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Pajaritos a Volar', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMDMyODMyMTQtMDdlZi00N2YyLWJiNzUtMTQwMzZjZThiNDBiXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/PAJARITOS%20A%20VOLAR.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Patos!', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMDBhNGQwN2UtZDI4NS00ZjFjLWE5NTEtOGRmYzVlNjUyNDMzXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/PATO%20PATO%20GANZO.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Ratatoiulle', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/RATATOIULLE.mp4'
		  }	 
		 ,{ cat: 'Infantil Varios', title: 'Goofy La Pelicula', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYzdlNGIwOGItMTA2Zi00MTQ3LTkxMTctYmNjZjZlMjQ5MjRjXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/2074-goofy-la-pelicula-1995-d-s-spa-eng-v_20240418/2074-Goofy%20La%20Pelicula%20%281995%29%20D%20S%20spa%20eng%20v.mkv'
		  }	  
		 ,{ cat: 'Infantil Varios', title: 'Ricky Ricón', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BOTQxMmE0YWQtYjk3OS00ZmFmLWFjMWUtMDJhZDY0ZDViNGIxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/ricky-ricon-1994/Ricky%20Ric%C3%B3n%20%281994%29.mp4'
		  }
		 ,{ cat: 'Infantil Varios', title: 'Cigüeñas',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQyMjYzNDQtM2RiZi00ZGE0LThkZWEtYzQyMzc0YTdjNDljXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/00070_202211/00070.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'La Oveja Shaun - El Cordero', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZmYxYWRmODAtMWEzNC00MTAxLTkyN2EtMTM1YmE2YzAwNmQxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/shaun-en-el-espacio-farmageddon-2019/La%20oveja%20Shaun%20-%20El%20Cordero%20%282015%29.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Varios', title: 'Las Aventuras de Peabody y Sherman', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZWMyODZlZTktNWE0Ny00YzUzLWFkOTQtZjFjYjA5ZWMyZmU0XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/00993_20221121/00993.mp4'
		  }	  
		 ,{ cat: 'Infantil Varios', title: 'Una Ratoncita Valiente', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNzFjYzgxYmItYmI1OC00NWM5LWFmYWEtNDRiYmZiN2U4MzZhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/la-ratoncita-valiente-1982-espanol-latino/La%20Ratoncita%20Valiente%20%281982%29%20Espa%C3%B1ol%20Latino.mp4'
		  }
			,{ cat: 'Infantil Varios', title: 'UP Una Aventura de Altura', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNmI1ZTc5MWMtMDYyOS00ZDc2LTkzOTAtNjQ4NWIxNjYyNDgzXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/UP-%20UNA%20AVENTURA%20DE%20ALTURA.mp4'
		  }	  	  
			,{ cat: 'Infantil Varios', title: 'Vacas Vaqueras', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BOTkzNDNmNDktNjAwOS00NmI5LWJkM2YtODYyMjE4ZTcwODQ2XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/VACAS%20VAQUERAS.mp4'
		  }	  	  
			 ,{ cat: 'Infantil Varios', title: 'Zootopia', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMGNjNDRhOTctZjU2OS00ODBkLWFkZWEtMjI4ZWQ4MTllMTFiXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/ZOOTOPIA.mp4'
		  }
		 ,{ cat: 'Infantil Varios', title: 'El Libro de la Vida', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BODM1OTRjYjktZjU5Zi00M2Y2LTgxZTctODEwMzAyZDdmNTBjXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/el-libro-de-la-vida_202205/El%20Libro%20de%20la%20Vida.mp4'
		  }	  
		 ,{ cat: 'Infantil Varios', title: 'Street Fighter Alpha', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTg0MjIyODIxNF5BMl5BanBnXkFtZTcwMTQ1OTAzMQ@@._V1_.jpg', 
			url: 'https://archive.org/download/sfa-1/SFA1.mp4'
		  }	  
		 ,{ cat: 'Infantil Varios', title: 'Street Fighter II: The Animated Movie', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTVmY2I1YjctMDMwMS00OWFmLWFiNDktMTk2ZDljZDIzYTg4XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/street-fighter-2_202404/1_5096039436131500955.mp4'
		  }	  
		 ,{ cat: 'Infantil Varios', title: 'Minion Nace un Villano', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNjU2OTc3NjMtNzcxYi00ODAwLWFkZTAtNzQyMzkzMTgzYzI4XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/minions.-nace.-un.-villano.-1080p.-dual-latino._202401/Minions.%20Nace.Un.Villano.1080p.Dual-Latino..mp4'
		  }
		 ,{ cat: 'Infantil Varios', title: 'Megamente',
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTE2YzI0ZmQtZGNiMC00NjY2LTg3ODktNDFlOTc4MmJjOGFjXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/megamente_2010_1080p/Megamente.2010.1080p.mkv'
		 }
		  
		 ,{ cat: 'Infantil Angry Bird', title: 'Angry Bird 1', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNjRlNmIxN2ItMDE4NS00NTM2LTllNTEtNzAwZTIzZmE0YzA2XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/ANGRY%20BIRDS%201.mp4' 
		  }
		 ,{ cat: 'Infantil Angry Bird', title: 'Angry Bird 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMzJmZTY2ZTktZDVlYy00Y2VjLWJiZjMtMmUzZDVhOGU4NjdiXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/ANGRY%20BIRDS%202.mp4' 
		  }
		 ,{ cat: 'Infantil Barbie', title: 'Barbie Cascanueces', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZTE0OWE5ZTctM2U2YS00MWQyLWFkODAtMjI3Mzg0MWY3ZmQ5XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20CASCANUECES.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Barbie', title: 'Barbie En Busca de Perritos', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYTgyNGYwMTUtY2I5OC00YTUwLWEwZjctN2ZmZjliODg5Yzc1XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20EN%20BUSCA%20DE%20PERRITOS.mp4'
		  }	  
		 ,{ cat: 'Infantil Barbie', title: 'Barbie Escuela de Princesas', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMmM5MjNjNzUtZDdlMC00MDU4LWE3MjEtN2EyYWU4ZWUxZTgyXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20ESCUELA%20DE%20PRINCESAS.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Barbie', title: 'Barbie Princesa y la Plebeya', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYjQxYjg4NTktZDQ2Mi00YTZhLTlkMDAtMGYyNGIxNjRjZTg0XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20LA%20PRINCESA%20Y%20LA%20PLEBEYA.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Barbie', title: 'Barbie Princesa de las Islas', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZDljMjhlOTAtM2NmMC00OThmLTk3OTItYmE1NDM3ZDJlMzQxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20PRINCESA%20DE%20LAS%20ISLAS.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Barbie', title: 'Barbie Pulgarcita', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDdjYWQxYzgtOWNhNS00ODhjLWI5ZjAtOGRkNTliMzBmYzZkXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20PULGARCITA.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Barbie', title: 'Barbie El Secreto de las Hadas', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjM1NjI1ZTUtYzRkOC00NDE1LTgxZmUtMTgxYTYxMjJhMDZkXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20SECRETO%20DE%20LAS%20HADAS.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Barbie', title: 'Barbie Las Tres Mosqueteras', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYWQ4MjVhZmYtZGM2OS00Yjg1LWJlZWUtZjUwYzliMzI1M2ZiXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20TRES%20MOSQUETERAS.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Barbie', title: 'Barbie Una Aventura Espacial', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMjI3NDUyYmMtODNjMS00MGU5LTk5MTktNTY5NmIzMzA4MjIwXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20UN%20AVENTURA%20ESPACIAL.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Barbie', title: 'Barbie Una Aventura de Caballos', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMWJhYjRkYjMtMTUxNC00NmYyLTk3NDgtY2ZhNDg0NDYxYmUxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20UNA%20AVENTURA%20DE%20CABALLOS.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Barbie', title: 'Barbie Y las Doce Princesas Bailarinas', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMmVkNDNiMmUtYzU0NS00ODdhLThmMGItMDEwMjUzNWNlMTY1XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BARBIE%20Y%20LAS%20DOCE%20PRINCESAS%20BAILARINAS.mp4'
		  }	  	  	  
		 ,{ cat: 'Infantil Buscando a Nemo', title: 'Buscando a Nemo', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTFiMjA0NjAtZTEwYS00MWRiLWI3MGEtMDlkZGY1MDQ4NjhiXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BUSCANDO%20A%20NEMO.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Buscando a Nemo', title: 'Buscando a Dory', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BOTc3ZjNkMjctOTY4Zi00MjM3LWJjZTktMGRkYTFlYTMxY2MyXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/BUSCANDO%20A%20DORY.mp4'
		  }	  	  	  
		//     ,{ cat: 'Infantil Cars', title: 'Cars 1', 
		//		thumb: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_.jpg', 
		//		url: ''
		//	  }
		 ,{ cat: 'Infantil Cars', title: 'Cars 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/CARS%202.mp4'
		  }
		 ,{ cat: 'Infantil Cars', title: 'Cars 3', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZTEyMTJjMzUtYTcyOC00OGVhLWE4YWUtYzM3YWM1Y2JiMzQzXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/CARS%203.mp4'
		  }	  	  
		 ,{ cat: 'Infantil La Era de Hielo', title: 'La Era de Hielo 1', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZTQ4OWZlOWMtYmZlMS00ZjlmLTk4NzAtMGFlYmQxNjRmMDVkXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%201.mp4'
		  }	  	  
		 ,{ cat: 'Infantil La Era de Hielo', title: 'La Era de Hielo 2 El Deshielo', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZmFjNGE2NmYtYjA1Ni00N2QzLTk2MGYtZjBkZjNiNzc3NDhkXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%202.mp4'
		  }	  	  
		 ,{ cat: 'Infantil La Era de Hielo', title: 'La Era de Hielo 3 El Origen de los Dinosaurios', 
			thumb: 'https://mx.web.img3.acsta.net/pictures/20/10/21/20/18/4455162.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%203.mp4'
		  }	  	  
		 ,{ cat: 'Infantil La Era de Hielo', title: 'La Era de Hielo 4 La Formación de Continentes', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYmFiMmU3NDctMWJmYy00YjM1LWJkNzItNzk3OGE5NTBmMzg4XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%204%20LA%20DERIVA%20CONTINENTAL.mp4'
		  }	  	  
		 ,{ cat: 'Infantil La Era de Hielo', title: 'La Era de Hielo 5 Choque de Mundos', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMDYyMGJhYmEtYzMzYi00YmJiLWFjMmItODMyMTRhNzg1OGNkXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%205.mp4'
		  }	  	  
		 ,{ cat: 'Infantil La Era de Hielo', title: 'La Era de Hielo La Gran Busqueda de Pascua', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTBkOTUyNzUtYjU4OC00ZjU4LWExZmItZjNjYWFhYmRiNDAyXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%20LA%20GRAN%20BUSQUEDA%20DE%20PASCUA.mp4'
		  }	  	  
		 ,{ cat: 'Infantil La Era de Hielo', title: 'La Era de Hielo Una Navidad Tamaño Mamut', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYTljZmYwNTgtMzlkNC00NTBiLWE5NWEtODc5ZjMyZTUwNTNlXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LA%20ERA%20DE%20HIELO%20UNA%20NAVIDAD%20TAMAÑO%20MAMUT.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Lluvia de Hamburguesas', title: 'Lluvia de Hamburguesas 1', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BOGZjZTcwYmYtMTI0Zi00ZmE3LThjMmItYmM4NWUzZDcyMDAyXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LLUVIA%20DE%20HAMBURGUESAS%201.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Lluvia de Hamburguesas', title: 'Lluvia de Hamburguesas 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMGNhY2NiZWYtYmI4Ny00Nzk0LWE5ZWMtODU2NDUyMGI4NTQ3XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LLUVIA%20DE%20HAMBURGUESAS%202.mp4' 
		  }	  	  
		 ,{ cat: 'Infantil Locos por Las Nueces', title: 'Locos por Las Nueces 1', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMGY5Yzk4OGYtY2QzNy00ZTA0LWJhMTYtODAzZDM5OGUyOTBhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOCOS%20POR%20LAS%20NUECES%201.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Locos por Las Nueces', title: 'Locos por Las Nueces 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMDNhYzIxNGItZWIwMC00MzdmLWE0YTUtNzZmMzVmNGY4MGQyXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOCOS%20POR%20LAS%20NUECES%202.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Los Croods', title: 'Los Croods 1', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTcyOTc2OTA1Ml5BMl5BanBnXkFtZTcwOTI1MjkzOQ@@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOS%20CROODS%201.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Los Croods', title: 'Los Croods 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYmEyMDcxMWYtNjE4MS00Yjc3LWI3NzYtYWI2YjAzYmVmOTZhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOS%20CROODS%202.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Los Increibles', title: 'Los Increibles 1', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMmJlODRiYzktNTk5OC00YmY3LWEzODQtZmU3MzA5Mjg3YTQ1XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOS%20INCREIBLES%201.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Los Increibles', title: 'Los Increibles 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/LOS%20INCREIBLES%202.mp4'
		  }	  	   	  
		 ,{ cat: 'Infantil Sammy', title: 'Sammy 1 Y El Pasaje Secreto', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYjk0MTkwZDEtYzQ0MC00MWU2LWFmOGEtZGU1MTZmNTE1YmI2XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/SAMMY%20LA%20TORTUGA%201.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Sammy', title: 'Sammy 2 El Gran Escape', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTU5Mjg0NTE5NF5BMl5BanBnXkFtZTgwMTk3NTAxMzE@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/SAMMY%20LA%20TORTUGA%202.mp4'
		  }	  	  
		 ,{ cat: 'Infantil Shrek', title: 'Shrek 1', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/shrek_202407/Shrek.mp4'
		  }
		 ,{ cat: 'Infantil Shrek', title: 'Shrek 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMzNmNjQ1NmUtNzhiZS00YWE2LTg4N2ItZTA2ODdmOTMwOTQ1XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/shrek_202407/Shrek%202.mp4'
		  }
		 ,{ cat: 'Infantil Shrek', title: 'Shrek 3', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BOWY0NGIwMTUtNGQ0NS00NjJiLTkxYTYtY2Y5YWZmODI4ZGRlXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/shrek_202407/Shrek%20Tercero.mp4'
		  }
		 ,{ cat: 'Infantil Shrek', title: 'Shrek 4', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTY0OTU1NzkxMl5BMl5BanBnXkFtZTcwMzI2NDUzMw@@._V1_.jpg', 
			url: 'https://archive.org/download/shrek_202407/Shrek%20Para%20Siempre.mp4'
		  }
		 ,{ cat: 'Infantil Madagascar', title: 'Madagascar 1', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYjk4OGFmZmYtYWE4NC00MzM4LTkwZTItODdhMjk3NTZjMmI5XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/madagascar.-2005.-dvdrip.-latino.-xvi-d/Madagascar.2005.DVDRip.LATINO.XViD.mp4'
		  }	  
		 ,{ cat: 'Infantil Madagascar', title: 'Madagascar 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMjExMDA4NDcwMl5BMl5BanBnXkFtZTcwODAxNTQ3MQ@@._V1_.jpg', 
			url: 'https://archive.org/download/madagascar.-2005.-dvdrip.-latino.-xvi-d/Madagascar.Escape.2.Africa.2008.DVDRip.LATINO.XViD.mp4'
		  }
		 ,{ cat: 'Infantil Madagascar', title: 'Madagascar 3', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BOGE1N2U3N2EtYTE0My00YTYzLTkwZWYtMTI4YjhjZGU4YzZmXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/madagascar.-2005.-dvdrip.-latino.-xvi-d/Madagascar.3.Europes.Most.Wanted.2012.DVDRip.LATINO.XViD.mp4'
		  }
		 ,{ cat: 'Infantil Un Cuento Americano', title: 'Un Cuento Americano 1', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTgwMjc3NDYxOF5BMl5BanBnXkFtZTcwNjUwNDYxMQ@@._V1_.jpg', 
			url: 'https://archive.org/download/un-cuento-americano_202411/Un%20Cuento%20Americano.mp4'
		  }	  
		 ,{ cat: 'Infantil Un Cuento Americano', title: 'Un Cuento Americano 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNGYyNzJhOWEtODc5OC00ZjY5LWE4MTktN2IwMDU0YTEyYTViXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/un-cuento-americano_202411/Un%20Cuento%20Americano%202.mp4'
		  }	  
		 ,{ cat: 'Infantil Un Cuento Americano', title: 'Un Cuento Americano 3', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYTJjYTI3NzYtNWJjMC00MjBkLTk5OTAtMDNhMjQ1MTUyMGYyXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/un-cuento-americano_202411/Un%20Cuento%20Americano%203.mp4'
		  }	  
		 ,{ cat: 'Infantil Un Cuento Americano', title: 'Un Cuento Americano 4', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTEwMTM1MDUwMDVeQTJeQWpwZ15BbWU4MDUwNTUwMDcx._V1_.jpg', 
			url: 'https://archive.org/download/un-cuento-americano_202411/Un%20Cuento%20Americano%204.mp4'
		  }	  	  
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E01', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E1.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E02', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E2.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E03', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E3.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E04', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E4.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E05', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E5.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E06', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E6.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E07', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E7.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E08', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E8.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E09', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E9.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E10', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E10.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E11', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E11.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E12', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E12.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E13', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E13.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E14', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E14.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E15', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E15.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E16', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E16.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E17', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E17.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E18', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E18.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E19', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E19.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E20', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E20.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E21', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E21.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E22', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E22.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E23', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E23.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T1E24', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGE3OWU2Y2QtZmIyMy00M2MxLTkyMjItMzE0YzRhOTJmMWFhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/e-14_20230829/E24.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T2E01', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDJmMDU2YjQtY2YxNy00ZDUxLTg1OTctYmU4OTI2OTQ0ODUxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/s-02-e-13_202409/S02E01.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T2E02', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDJmMDU2YjQtY2YxNy00ZDUxLTg1OTctYmU4OTI2OTQ0ODUxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/s-02-e-13_202409/S02E02.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T2E03', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDJmMDU2YjQtY2YxNy00ZDUxLTg1OTctYmU4OTI2OTQ0ODUxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/s-02-e-13_202409/S02E03.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T2E04', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDJmMDU2YjQtY2YxNy00ZDUxLTg1OTctYmU4OTI2OTQ0ODUxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/s-02-e-13_202409/S02E04.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T2E05', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDJmMDU2YjQtY2YxNy00ZDUxLTg1OTctYmU4OTI2OTQ0ODUxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/s-02-e-13_202409/S02E05.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T2E06', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDJmMDU2YjQtY2YxNy00ZDUxLTg1OTctYmU4OTI2OTQ0ODUxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/s-02-e-13_202409/S02E06.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T2E07', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDJmMDU2YjQtY2YxNy00ZDUxLTg1OTctYmU4OTI2OTQ0ODUxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/s-02-e-13_202409/S02E07.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T2E08', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDJmMDU2YjQtY2YxNy00ZDUxLTg1OTctYmU4OTI2OTQ0ODUxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/s-02-e-13_202409/S02E08.mkv'
		  }
		 ,{ cat: 'Infantil El Chavo del 8', title: 'El Chavo del 8 T2E09', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDJmMDU2YjQtY2YxNy00ZDUxLTg1OTctYmU4OTI2OTQ0ODUxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/s-02-e-13_202409/S02E09.mkv'
		  }
		 ,{ cat: 'Infantil Shin Chan', title: 'Shin Chan En Busca de las bolas perdidas', 
			thumb: 'https://es.web.img3.acsta.net/c_310_420/pictures/210/104/21010445_20130605125033111.jpg', 
			url: 'https://archive.org/download/shin-chan-las-bolas-perdidas/SHIN%20CHAN%20LAS%20BOLAS%20PERDIDAS.mp4'
		  }	 
		  
		//	 ,{ cat: 'Infantil Stuart Little', title: 'Stuart Little 1', 
		//	    thumb: 'https://m.media-amazon.com/images/M/MV5BYzk4MGYzNDQtOGIyMC00ZjNiLTgzODctYzA1NTUzMDMyNTRmXkEyXkFqcGc@._V1_.jpg', 
		//	    url: 'https://archive.org/download/stuart-little-1-1999_202208/Stuart%20Little%201%20%282002%29.mp4'
		//	  }	  
		 ,{ cat: 'Infantil Stuart Little', title: 'Stuart Little 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNzBiYWNjMzYtNTRhNS00ZTU0LWJhOTYtNzZjY2JjOWUyZGViXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/stuart-little-1-1999_202208/Stuart%20Little%202%20%282002%29.mp4'
		  }	  
		 ,{ cat: 'Infantil Stuart Little', title: 'Stuart Little 3', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTJkMDA1N2EtYTk0ZC00ZmIzLThjZDktYzVjNzcwYWE5NzQzXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/stuart-little-1-1999_202208/Stuart%20Little%203%20%282005%29.mp4'
		  }	  	
		 
		//	 ,{ cat: 'Infantil Tierra de Osos', title: 'Tierra de Osos 1', 
		//	    thumb: 'https://m.media-amazon.com/images/M/MV5BYWMzNmZjYjAtOTQ3Ni00MzA4LTg0ZDQtMDE4NzQ2ODJhNDc4XkEyXkFqcGc@._V1_.jpg', 
		//	    url: ''
		//	  }
		 ,{ cat: 'Infantil Tierra de Osos', title: 'Tierra de Osos 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BODAwMDhlYjQtYWJiMC00ZjU1LWI4NGEtYjAzNmYxY2NkODRhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/tierra-de-osos-2-2006-720p-audio-latino/Tierra%20de%20Osos%202%20%282006%29%20720p%20Audio%20Latino.mkv'
		  }
		  
		//     ,{ cat: 'Infantil Tarzán', title: 'Tarzán I', 
		//		thumb: 'https://m.media-amazon.com/images/M/MV5BZjM5OWM5NzktMTIzYy00OTk1LWIyYzAtYzBhNWY3NWQ2Y2Y0XkEyXkFqcGc@._V1_.jpg', 
		//		url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/TARZÁN%20COMO%20COMENZO%20TODO.mp4'
		//	  }	  	  
		 ,{ cat: 'Infantil Tarzán', title: 'Tarzán II', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYmM0MzQzY2ItM2UxOC00ZmMwLWIwNTYtNDc5MGEzYmNjYWU4XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/TARZÁN%20COMO%20COMENZO%20TODO.mp4'
		  }
		//	 ,{ cat: 'Infantil Tarzán', title: 'Tarzán & Jane', 
		//	    thumb: 'https://m.media-amazon.com/images/M/MV5BMzVkOGY1ZGEtZmI1Ny00YWM1LTgxYzgtZTkxYzVkNGZkZWU5XkEyXkFqcGc@._V1_.jpg', 
		//	    url: ''
		//	  }	  

		//     ,{ cat: 'Infantil El Rey León', title: 'El Rey León 1', 
		//		thumb: 'https://m.media-amazon.com/images/M/MV5BNjExYTQwY2EtMDRkYi00ZWIzLTkwZDUtYjVmODYxMDUwNDI5XkEyXkFqcGc@._V1_.jpg', 
		//		url: ''
		//	  }
		 ,{ cat: 'Infantil El Rey León', title: 'El Rey León 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMjA1MDUxNjI4OF5BMl5BanBnXkFtZTcwMTY4NTYyMQ@@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/EL%20REY%20LEÓN%202.mp4'
		  }
		 ,{ cat: 'Infantil El Rey León', title: 'Timón y Pumba', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZDA2MGU3MTgtYjhkNC00MWI4LWE2ZjAtY2NmZTRkMTM1YjQ2XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://ia800400.us.archive.org/29/items/lluvia-de-hamburguesas-2_202306/TIMON%20Y%20PUMBA.mp4'
		  }	  	  

		 <!-- ********** DOCUMENTALES ****************************************************************************************************************** -->
		 ,{ cat: 'Documental', title: 'El Niño, el topo, el zorro y el Caballo', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZDg4MjI3NGMtOTcwMC00ZWQ0LWI0YjMtNDA0YmZjN2FlYzg2XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/el-nino-el-topo-el-zorro-y-el-caballo-1080p-dual-759.22-mb/El%20Ni%C3%B1o%2C%20El%20Topo%2C%20El%20Zorro%20y%20El%20Caballo%201080p%20DUAL%20759.22%20MB.mkv' 
		  }	  	  
		 
		 <!-- ********** MUSICALES    ****************************************************************************************************************** -->
		,{ cat: 'Musical', title: 'Bad Bunny - Super Bowl LX 2026', 
			thumb: 'https://www.apple.com/newsroom/images/2026/02/apple-music-kicks-off-bad-bunnys-road-to-halftime-ahead-of-super-bowl-lx/article/Apple-Music-Super-Bowl-LX-Halftime-Show-Bad-Bunny_big.jpg.large.jpg', 
			url: 'https://archive.org/download/bad-bunny-halftime-show-2026/rapidsave.com_highlight_bad_bunny_lady_gaga_ricky_martins_super-einlzke6hdig1.mp4'
		 }		
		,{ cat: 'Musical', title: 'Ricardo Arjona - Santo Pecado Unplugged', 
			thumb: 'https://ia802806.us.archive.org/26/items/mbid-98663bc9-135a-453d-8e80-aab091af7e6c/mbid-98663bc9-135a-453d-8e80-aab091af7e6c-6590801858.jpg', 
			url: 'https://archive.org/download/music-01_20221113/MUSIC01.mp4'
		 }
		,{ cat: 'Musical', title: 'El Mundo de las Spice Girls', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNjExNmI4MzktZmEzNi00YjcyLThjNjgtZTc0YzI1MTI5ZDhlXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/el-mundo-de-las-spice-girls/El%20Mundo%20de%20las%20Spice%20Girls.mkv'
		  }     
		 ,{ cat: 'Musical', title: 'Michael Jacksons - Triller', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMDM1YzIyNTYtOGFiMS00YjJiLThiMTktMjllYzI4NjExOGNjXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/thriller.40.2023.1080p/Thriller.40.2023.1080P.ia.mp4' 
		  }	
		 ,{ cat: 'Musical', title: 'Pimpinela: Diamante 25 Aniversario', 
			thumb: 'https://m.media-amazon.com/images/I/51lGg9yUFOL._SY355_.jpg', 
			url: 'https://archive.org/download/pimpinela-25-th/PIMPINELA25TH.mp4'
		  }
		 ,{ cat: 'Musical', title: 'Pimpinela: Entre Amigos', 
			thumb: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6B0EJ3436zkMvQJuzRGWSZ2AjMIHtEGs-tsntU4J3hTQNaMjad16mrwNHTr4LNI_vPkviuVHdOjYF48xyDWET_HPmv2QQRwt0WFimHhP_9Ee15dDYOz6ptFS8yIjVxNqoYz4BGvApxXU/s1600/PIMPINELA+LP+2006.jpg', 
			url: 'https://archive.org/download/pimpinela_202402/PIMPINELA.mp4'
		  }	  

		 <!-- ********** PELICULAS ************************************************************************************************************************ -->
			
		 ,{ cat: 'Peliculas', title: 'Lolita<br>1997', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BM2RhYjNkYzAtYmFkMi00MjI5LWE5MzUtMTA3ODAwZmMzMzM0XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/lolita-1987-latino/Lolita%201987%20LATINO.mp4'
		 }
		 ,{ cat: 'Peliculas', title: 'Tropa de Elite<br>2007', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNzIyZTdkMjMtMzI5OC00ODAwLWI0ZGQtNjdlMDhiMzc0ODdiXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tropa-de-elite-2007-calidad-hd-espanol-latino/Tropa%20de%20Elite%20%282007%29%20%5BCalidad%20HD%20%20Espa%C3%B1ol%20Latino%5D.mp4'
		 }
		 ,{ cat: 'Peliculas', title: 'La Novicia<br>2017', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTU5NDQzNTY2MV5BMl5BanBnXkFtZTgwMjgxMTMyMzI@._V1_.jpg',
			url: 'https://archive.org/download/noviatate-2017-1080p-latino/Noviatate%202017%201080p%20latino.mp4'
		 }
		 ,{ cat: 'Peliculas', title: '31 Minutos La Pelicula<br>2008', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZWIwMTk2YTItZDg4YS00OWY4LWJkNzUtNTg5ZTkyNDI4M2Q0XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/31-minutos-la-pelicula-2008/31%20Minutos%2C%20La%20Pel%C3%ADcula%20%282008%29.mp4'
		 }
		 ,{ cat: 'Peliculas', title: '31 Minutos Calurosa Navidad<br>2025', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNGUzYjAyMzYtZTExMC00MWQxLTg5NTMtNTMwZjFjYjMzYzI0XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/31-minutos-calurosa-navidad-2025/31%20Minutos_%20Calurosa%20Navidad%20%282025%29.mkv'
		 }
		 ,{ cat: 'Peliculas', title: 'Patch Adams<br>1998', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYjEwMTJhMDktZDFjZi00MzQ5LTg0NWMtMDlhNmNiYWRkMDk1XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/patch-adams-latino-1080p-latino/Patch%20Adams%20Latino1080p%20Latino.mp4'
		 }
		 ,{ cat: 'Peliculas', title: 'Killing Me Softly / Mátame suavemente<br>2002', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYjlmMWU5ZTQtODlmOC00YTA1LWI5YWYtYjU0NGI1ZTc0NjBhXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/killing-me-softly-2002-espanol-americano/Killing%20Me%20Softly%202002%20Espanol%20Americano.mp4'
		 }
		 ,{ cat: 'Peliculas', title: 'El Charlatán<br>1992', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYWM0NGJiYjMtZWI1MC00NzgyLTk5MzQtMWYyZjQyYzc0YTMwXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/leap-of-faith-1080p-60-fps.mkv/Leap%20Of%20Faith%20%20%20%20%20%201080p_60FPS.mkv'
		 }		
		 ,{ cat: 'Peliculas', title: 'Barrabás<br>1961', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYmIwOTYyYWQtM2M3NC00ZWM0LTgwNDQtODNhMjE3MGNjY2IwXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/barrabas-1080p-60-fps-1961.mkv/Barrabas_1080p60FPS%201961.mkv'
		 }
		 ,{ cat: 'Peliculas', title: 'Soñadores<br>2003', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BN2FiOWY3YjgtMGFiYy00Y2JkLThhOTAtNTA4YWRjMmY4NzI1XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/the-dreamers-los-sonadores-2003-brrip-hd-720p-latino-dual_202510/The%20Dreamers%20%5BLos%20So%C3%B1adores%5D%20%282003%29%20BRRip%20HD%20720p%20Latino%20Dual.mp4'
		 }
		 ,{ cat: 'Peliculas', title: 'El precio del mañana<br>2011', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMWM1ZDYxNjYtNmYzOS00MjBmLWJkM2MtZmJjNDg2NTU5YTA4XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/el-precio-del-manana-2011-pelicula-completa-espanol-latino-hd/El%20Precio%20del%20ma%C3%B1ana%202011%20-%20Pel%C3%ADcula%20Completa%20Espa%C3%B1ol%20Latino%20HD.mp4'
		 }
		 ,{ cat: 'Peliculas', title: 'Joven y Alocada<br>2012', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMWZhYjU4NDYtYjBjYy00ZDQ1LWI5MDEtNzdkZWNhYjBiY2YyXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/joven-y-alocada-2012-ultra-hd/Joven%20y%20alocada%202012%20ULTRA%20HD.mp4'
		 }
		,{ cat: 'Peliculas', title: 'El hoyo 2<br>2024', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNjc3N2UwZDQtODRiZC00ZjJkLTliYzUtYzA4ZGNiMTQ0ZTNjXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/el-hoyo-2/El%20hoyo%202.mp4'
		 }		
		 ,{ cat: 'Peliculas', title: 'De padres a hijas<br>2015', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BOGZjMTcyYzItOGQ4Zi00M2I2LTgzMDItOWVjMDFlOGE3MzA5XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/fathers.and.daughters.-2015.1080p-dual-lat/Fathers.and.daughters.2015.1080p-dual-lat.mp4'
		 }
		 ,{ cat: 'Peliculas', title: 'Flamin Hot<br>2023', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZTczOWUxZjgtNzhlYi00YzUxLTg4ZjctZTQyNmI2MGZlYjU3XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/flamin-hot-el-sabor-que-cambio-la-historia.-2023.-web-dl.-1080p.-latino.-ww-w.-peliculasgd.-net/Flamin%20Hot%20El%20Sabor%20que%20cambio%20la%20historia.%282023%29.WEB-DL.1080p.Latino.WwW.Peliculasgd.Net.mkv'	   
		 }
		 ,{ cat: 'Peliculas', title: 'Avión presidencial<br>1997', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjI2YmZjN2ItODNmYS00YmNkLWI0Y2YtMmQyZTVlM2NhZjg3XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/2824-avion-presidencial-1997-720p-d-s-spa-eng-v_202404/2824-Avion%20Presidencial%20%281997%29%20720p%20D%20S%20spa%20eng%20v.mp4'
		  }
		 ,{ cat: 'Peliculas', title: 'El increible hulk<br>2008', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYmJkODY3ZDItNDk4Ny00OGFmLWE3OGQtYmEwMDRmMGQ3NmI2XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/5-el-increible-hulk/5%20El%20Increible%20Hulk.mp4'
		  }	  	  
		 ,{ cat: 'Peliculas', title: 'El resplandor<br>1980', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYmUxZDU3NjktMzA1OS00OGUwLWJkOTctYzhjOGI5MTcyY2U3XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/el-resplandor-venta-1980-25fps-3000kps/El%20Resplandor%20%28Venta%201980%20-%2025fps%20-3000kps%29.mp4'
		  }	  
		 ,{ cat: 'Peliculas', title: 'El sexto sentido<br>1999', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMjhmYzg2MzUtMzYwMi00NWE0LWIxNTAtOTE0ZDQ4NTQxZGQ0XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/sexto-sentido_202407/Sexto%20Sentido.mp4'
		  }	 
		 ,{ cat: 'Peliculas', title: 'La naranja mecánica<br>1971', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYjFiN2E5N2ItZjc1Yy00MzZmLThmZGQtNGIyYjljMzk1NmU4XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/la-naranja-mecanica.-latino/La%20naranja%20mec%C3%A1nica.%20Latino.mp4'
		  }
		 ,{ cat: 'Peliculas', title: 'Los Sustitutos<br>2009', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYmNhMzNhYzgtZTE4OS00NDEyLTk2YzEtYTJiNjlmNjRiZDAwXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/The.surrogates.dvdrip.latino.c/The.surrogates.dvdrip.latino.c.mp4'
		  }	  
		 ,{ cat: 'Peliculas', title: 'Machete<br>2010', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZTY0OTZmYTMtMjhmOC00NzM3LTk2Y2MtMDg1ODNlOTkyNTcwXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/2596-machete-2010-720p-d-s-spa-eng-tc-v/2596-Machete%20%282010%29%20720p%20D%20S%20spa%20eng%20TC%20v.mp4'
		  } 
		 ,{ cat: 'Peliculas', title: 'Planeta Terror<br>2007', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMmFmOTBhZTUtMDdkNy00YzM4LWI0NmQtOTIzZDNiMzAxZDNhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/planeta-terror_202407/Planeta%20Terror.mp4'
		  }	  
		 ,{ cat: 'Peliculas', title: 'Seduciendo a un Extraño<br>2007', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTYwYTBiMGItODI1MS00MGU4LWE5M2ItNzE3YjZmNzI1OWQ2XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/s3duc13nd0.4.un.extr4n10.www.irandopeliculas.com/s3duc13nd0.4.un.extr4n10.www.%2Cirandopeliculas.com.mp4'
		  }	  
		 ,{ cat: 'Peliculas', title: 'Titanes del Pacifico 2<br>2018', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYjU2OWM0N2ItMWU3Zi00OTE3LWJlOTktNzE3YWNkMDBiOTlhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/titanes-del-pacifico_202107/Titanes%20del%20Pacifico.mkv'
		  }	  
		 ,{ cat: 'Peliculas', title: 'Un Detective en el Kinder 1<br>1990', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BOGU3ZDk0M2EtMjAwNi00ZTI3LTk4MWQtYjcwNTUwZjMwMWZmXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/un-detective-en-el-kinder-1990-espanol-latino/Un%20Detective%20En%20El%20Kinder%20%281990%29%20%28Espa%C3%B1ol%20Latino%29.mp4'
		  }
		 ,{ cat: 'Peliculas', title: 'Un Detective en el Kinder 2<br>2016',
			thumb: 'https://m.media-amazon.com/images/M/MV5BMDAzYzFlNjEtMzkzNy00OTNkLTgzNjktMGM0NmExNGVmODBmXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/un-detective-en-el-kinder-1990-espanol-latino/Un%20Detective%20En%20El%20Kinder%202%20%282016%29%20%28Espa%C3%B1ol%20Latino%29.mp4'
		  }	  
		 ,{ cat: 'Peliculas', title: 'AKIRA<br>1988', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZmEyOWZhNWYtMDdmZi00MmM0LThlMGEtZDA5YzhjNThjYzQ5XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/akira1988_202405/1_5060039041731265309.mp4'
		  }	  	  
		 ,{ cat: 'Peliculas', title: 'Pasajeros<br>2016', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BOTZmZDlmYzgtM2VjMi00OWU4LTk4ZmQtNTExMmQwM2NkODYzXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/Passengers_201703/Passengers.mp4'
		  }	  	  
		 ,{ cat: 'Peliculas', title: 'No se aceptan Devoluciones<br>2013', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNzVjOTZhZTEtNTc4OS00NTY1LThjZTgtZjdkZWViOTI4NDE2XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/no.-se.-aceptan.-devoluciones.-2013.-dvdr/No.Se.Aceptan.Devoluciones.2013.DVDR.mp4'
		  }	  	  	  
		 ,{ cat: 'Peliculas', title: 'Stealth La Amenaza Invisible<br>2005', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTYyMzMwMDMwMF5BMl5BanBnXkFtZTcwMzEzMzE2MQ@@._V1_.jpg', 
			url: 'https://archive.org/download/stealth.-2005.-dvdr/Stealth.2005.DVDR.mp4'
		  }
		/* ,{ cat: 'Peliculas', title: 'Piraña 3D<br>2005', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BN2JhNDI2NTctNjdlMi00OTA2LWE2MjktYjlmMjMyYWRjYWRmXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://vd281.okcdn.ru/?expires=1741195474434\u0026srcIp=200.55.194.66\u0026pr=10\u0026srcAg=CHROME\u0026ms=185.226.52.31\u0026type=5\u0026sig=BC1qHMvGm40\u0026ct=0\u0026urls=45.136.21.52\u0026clientType=1\u0026zs=43\u0026id=7252733463101'
		  } */	  
		 ,{ cat: 'Peliculas', title: 'Neon Genesis Evangelion: The End Of Evangelion<br>1997', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDUzNjgyNDEtYzUyNi00ZWNhLWE1OTAtZjdjNjBhZDc5YmQ3XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/the-end-of-evangelion-1997_202010/27%20-%20The%20End%20of%20Evangelion%20%281997%29.mkv'
		  }	  
		 ,{ cat: 'Peliculas', title: 'Neon Genesis Evangelion: Death & Rebirth<br>1997', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMGRiOWQyOTAtZDQ0Ny00NGRiLWIyYTYtZWM1MjNjNzg0ZjE3XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/neon-genesis-evangelion-death-rebirth/Neon%20Genesis%20Evangelion%20Death%20%26%20Rebirth.mp4'
		  }	  	  
		 ,{ cat: 'Peliculas', title: 'Gran Prix<br>1982', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNWZlYWFjMzItMTI0My00OGIxLThhYzktMTkxMDNiZThlNjdlXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/grand-prix-1978/Grand%20Prix%20%281978%29.mp4'
		  }	      
		 ,{ cat: 'Peliculas', title: 'La Purga<br>2011', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYzI3Yjk0YmMtOGE0MS00MmQ3LTk4ZTMtYzM3ZWZlYmI2N2I5XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/The.Purge.1080p.latino/The.Purge.1080p.latino.mkv'
		  }
		 ,{ cat: 'Peliculas', title: 'Sangre por Sangre<br>1993',
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDEwYWY5ZjEtNjA5OC00ZGEyLWE3YjgtOWRiNmFiNzU0ZGFiXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/sangre-por-sangre.-1993.720p.-latino/Sangre%20por%20Sangre.1993.720p.Latino.mp4'		 
		 }
		 ,{ cat: 'Peliculas', title: 'Soy Leyenda<br>2007',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjcyOWYxNWYtNGU0ZC00ZWJhLThmZDktYmI1NzRmYjNkZjQ5XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/soy-leyenda-2007_202505/Soy%20Leyenda%20%282007%29.mkv'		 
		 }
		 ,{ cat: 'Peliculas', title: 'Guerra Mundial Z<br>2013',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjlhOGFjYjMtZTQzZS00YWQzLWJkZjAtZDU5NDJlZmQ0N2M4XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/guerra-mundial-z-1080p-/Guerra%20Mundial%20Z%20%282013%29%201080p%202%2C65%20GB.mkv'		 
		 }
		 ,{ cat: 'Peliculas', title: 'Robot Salvaje<br>2024',
			thumb: 'https://m.media-amazon.com/images/M/MV5BNTMwYzNhZTUtYWYyNy00NWVjLTg2NjItMzQ3YzlkYjM1NjQ4XkEyXkFqcGc@._V1_FMjpg_UY593_.jpg',
			url: 'https://archive.org/download/robot-salvaje-720p-dual/Robot%20Salvaje%20720p%20DUAL%202.09%20GB.mkv'		 
		 }
		,{ cat: 'Peliculas', title: 'El Robo del Siglo<br>2020',
			thumb: 'https://m.media-amazon.com/images/M/MV5BMzYwMjVkNTAtMTY3MS00ODZkLWFjYjQtM2ZmODA1OTJhYTE2XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/el-robo-del-siglo-720p/_El%20robo%20del%20siglo.2020.720p.Latino.mkv'		 
		 }
		 ,{ cat: 'Peliculas', title: 'Relatos Salvajes<br>2014',
			thumb: 'https://m.media-amazon.com/images/M/MV5BNmJlNWU2ODAtZTFmMC00M2ExLThjM2ItOWIyZGMzZGEzY2RlXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/relatos-salvajes-2014/Relatos.Salvajes.2014.720p.Latino.mkv'	 
		 }
		 ,{ cat: 'Peliculas', title: 'Generación Perdida<br>1987',
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTc4NzljMDQtMWYxMS00ZDIxLTkwY2ItMjZhMzIzNjQ4NDNkXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/generacion_perdida_1987_720p/Generacion.Perdida.1987.720p.Audio.Dual.mkv'
		 }	 
		 ,{ cat: 'Peliculas', title: '1917<br>2019',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZWRlZGY4MGEtYzQxMC00MjJiLTgzNWMtNDljMmEyNmNjYjJkXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/1917_2019_720p/1917%20%282019%29%20HD%20720p%20Latino.mkv'
		 }	 
		 ,{ cat: 'Peliculas', title: 'Robin Hood<br>2018',
			thumb: 'https://m.media-amazon.com/images/M/MV5BM2NkM2Q1MzAtOTk2ZC00YzcyLWE0MjEtZWQ2OGQ5Y2NiM2Q5XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/robin_hood_2018_1080p/Robin%20Hood.2018.1080p.Latino.mkv'
		 }
		 ,{ cat: 'Peliculas', title: 'Cuidado Bebe Suelto<br>1994',
			thumb: 'https://m.media-amazon.com/images/M/MV5BMGEyYjNhMzItNTUwNy00MmE4LWJiNDctNzMyMmI3NDY0MTk1XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/cuidado_bebe_suelto_1080p/Cuidado%20Bebe%20Suelto.1080p.Dual.mkv'
		 }
		 ,{ cat: 'Peliculas', title: 'La Acompañante Perfecta<br>2025',
			thumb: 'https://m.media-amazon.com/images/M/MV5BODgwNDZkZjctYWU5Zi00MzdhLWJlMDctYTI3ZTQxMzRhZDUwXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/companera-perfecta-2025-1080p/Compa%C3%B1era_perfecta_%282025%29_1080p_DUAL_1.94_GB%5B2%5D.mkv'
		 }
		/* se escucha en ingles    
		 ,{ cat: 'Peliculas', title: 'Yo Antes de Ti<br>2016',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjU3NmJmYWItMDVhZC00NmM2LWI3YzEtYTg4MzA0YWZiYTQ2XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/yo-antes-de-ti.-720p.-audio-latino/Yo%20Antes%20De%20Ti.720p.AudioLatino.mkv'		 
		 }*/
			
		 <!-- ********** STUDIO GHIBLI ***************************************************************************************************************** -->	  
		 ,{ cat: 'Studio Ghibli', title: '1984 NAUSICAA del valle del viento', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYzU1YWQ4NTItMjI2Zi00NTc2LWFiYjktNDMyODdmN2FmYTRkXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/1984-kaze-no-tani-no-naushika-nausicaa-del-valle-del-viento/1984_Kaze_no_Tani_no%20Naushika_%28Nausicaa%20del%20valle%20del%20viento%29.ia.mp4'
		  }	  	 
		 ,{ cat: 'Studio Ghibli', title: '1986 El Castillo en el Cielo',
			thumb: 'https://m.media-amazon.com/images/M/MV5BYmE0ZjEzMDgtNmJlOS00YjNhLTgyZTctNzExOTNhNjdjNzEzXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/2.-el-castillo-en-el-cielo/2.%20El%20castillo%20en%20el%20cielo.mp4'
		  }	  
		 ,{ cat: 'Studio Ghibli', title: '1988 La Tumba de las Luciernagas',
			thumb: 'https://m.media-amazon.com/images/M/MV5BMjdlOTNhMGItMDgxYy00OTYwLTkwMGYtNzAzMDRlNGEyODI1XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/3.-la-tumba-de-las-luciernagas/3.%20La%20tumba%20de%20las%20luci%C3%A9rnagas.mp4'
		  }
		 ,{ cat: 'Studio Ghibli', title: '1988 Mi Vecino Totoro',
			thumb: 'https://m.media-amazon.com/images/M/MV5BNzhjNTQ5N2UtZjAxMS00NDVlLTg2ZWMtMDAzZDY0NGEyYzU4XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/4.-mi-vecino-totoro/4.%20Mi%20vecino%20totoro.ia.mp4'
		  }
		 ,{ cat: 'Studio Ghibli', title: '1989 KIKI Entregas a domicilio', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMzExZWM4N2EtZmZlYS00NGMxLWFmZDgtZDdiOTdhYzkwZjlkXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/1989-majo-no-takkyubin-kiki-aprendiz-de-bruja/1989_Majo_no_takky%C3%BBbin_%28Kiki_aprendiz_de_bruja%29.mp4'
		  }	  
		 ,{ cat: 'Studio Ghibli', title: '1991 Recuerdos del Ayer',
			thumb: 'https://m.media-amazon.com/images/M/MV5BNmViYmU2MzItYTMyOS00OWJiLTg4NDMtNGE5MGI2ODZjYzkxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/6.-recuerdos-del-ayer/6.%20Recuerdos%20del%20ayer.mkv'
		  }
		 ,{ cat: 'Studio Ghibli', title: '1992 PORCO ROSSO', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDkzNDUyNTQtN2IwOS00OGEzLWJiYWMtMWU5MDI3YzU4MDhiXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/1992-kurenai-no-buta-porco-rosso/1992_Kurenai_no_Buta_%28Porco_Rosso%29%20.mp4'
		  }
		 ,{ cat: 'Studio Ghibli', title: '1993 Puedo escuchar el Mar',
			thumb: 'https://m.media-amazon.com/images/M/MV5BMzNhNTZkNjItNzUxYi00YzFhLWEzYmYtMTM5ZDViZTgzZTkwXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/8.-puedo-escuchar-el-mar/8.%20Puedo%20escuchar%20el%20mar.mkv'
		  }
		 ,{ cat: 'Studio Ghibli', title: '1994 Pompoko',
			thumb: 'https://m.media-amazon.com/images/M/MV5BMWQ1OGZmNDYtMzc0Yi00MmQzLThhNWYtMDYwNzk5NTY3ODdkXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/9.-p-0mp-0k-0/9.%20P0mp0k0.mp4'
		  }
		 ,{ cat: 'Studio Ghibli', title: '1995 Susurros del Corazón',
			thumb: 'https://m.media-amazon.com/images/M/MV5BYjVlMDBkOTgtNWU4Mi00ODMzLWJlZDctMWY5NjIyMDdlNzhiXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/10.-susurros-del-corazon/10.%20Susurros%20del%20coraz%C3%B3n.mkv'
		  }
		 ,{ cat: 'Studio Ghibli', title: '1997 La Princesa Mononoke',
			thumb: 'https://m.media-amazon.com/images/M/MV5BYjc1YjI2OGUtNzgyOC00ZmFiLThkNzgtYTRkNDQ5ZGEwM2I1XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/11.-la-princ-3sa-m-0n-0n-0k-3/11.%20La%20princ3sa%20m0n0n0k3.mp4'
		  }
		 ,{ cat: 'Studio Ghibli', title: '1999 Mis Vecinos los Yamada',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZTA3Y2FjZDItZmZlOC00NGI0LWEwNTItNTE0ZTQ5NTJkZjJlXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/12.-mis-vecinos-los-yamada/12.%20Mis%20vecinos%20los%20yamada.mkv'
		  }
		 ,{ cat: 'Studio Ghibli', title: '2001 El Viaje de Chihiro',
			thumb: 'https://m.media-amazon.com/images/M/MV5BM2E2YzcwMTQtNWRlMC00ZGZlLWJhZTEtMDU4ZGIzMWI0NzJmXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/13.-el-viaje-de-chihiro/El.Viaje.de.Chihiro.1080p.mp4'
		  }
		 ,{ cat: 'Studio Ghibli', title: '2002 Haru en el Reino de los Gatos',
			thumb: 'https://m.media-amazon.com/images/M/MV5BY2NjZTY5NjgtNjIyZC00NDY5LWE2NmQtYjgxMjBlMWYwNDRjXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/14.-haru-en-el-reino-de-los-gatos/14.%20Haru%20en%20el%20reino%20de%20los%20gatos.mp4'
		  }
		 ,{ cat: 'Studio Ghibli', title: '2004 El Castillo Ambulante',
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDRiZjJkYWEtOTdlYi00NjZiLWFkY2EtMGRjYThhYjNhYWU0XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/15.-el-castillo-ambulante_202108/15.%20El%20Castillo%20Ambulante.mkv'
		  }
		 ,{ cat: 'Studio Ghibli', title: '2006 Cuentos de Terramar',
			thumb: 'https://m.media-amazon.com/images/M/MV5BOTU4NmI0YzAtOTkwMy00ZGU1LTljZjAtYWU1MTMwNTVhZGVmXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/16.-cuentos-de-terramar/16.%20Cuentos%20de%20terramar.mp4'
		  }
		 ,{ cat: 'Studio Ghibli', title: '2008 PONYO',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZTk0ZjhmMTItZTY4OS00MzM0LWI3YjQtYTIyMzIwN2UwYjQ0XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/17.-ponyo/17.%20Ponyo.mp4'
		  }
		 ,{ cat: 'Studio Ghibli', title: '2011 La Colina de las Amapolas',
			thumb: 'https://m.media-amazon.com/images/M/MV5BNzRmYzY2ODktZWM4NS00OTc5LWE5NGEtYWY3NTRmYzM4ZmE5XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/19.-la-colina-de-las-amapolas/19.%20La%20colina%20de%20las%20amapolas.mp4'
		  }
		 ,{ cat: 'Studio Ghibli', title: '2013 Se Levanta el Viento', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYzdmOWJlNmUtYzE2MC00M2IzLTk2MTktNDFjOTA5ZDVkOGZmXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/20.-se-levanta-el-viento/20.%20Se%20levanta%20el%20viento.mp4' 
		  } 
		 ,{ cat: 'Studio Ghibli', title: '2013 La Princesa Kaguya',
			thumb: 'https://m.media-amazon.com/images/M/MV5BN2IxN2ZmNzQtNjQ5Mi00OTFkLThmZWItM2FiMDlmOTE3YTc0XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/21.-la-princesa-kaguya/21.%20La%20princesa%20kaguya.mp4'
		  }
		 ,{ cat: 'Studio Ghibli', title: '2014 El Recuerdo de Marnie',
			thumb: 'https://m.media-amazon.com/images/M/MV5BOTY1MDM5YWUtODVkMy00MGRkLTlkMTEtYTQyMTFhZmFjYmZiXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/22.-el-recuerdo-de-marnie/22.%20El%20recuerdo%20de%20Marnie.mp4'
		  }	
		 ,{ cat: 'Studio Ghibli', title: '2020 Earwig y la bruja', 
			thumb: 'https://pics.filmaffinity.com/aya_to_majo-802898174-large.jpg',
			url: 'https://archive.org/download/earwig-y-la-bruja-2020-latino/earwig-y-la-bruja-2020-latino.mp4'
		  }
		 ,{ cat: 'Studio Ghibli', title: '2023 El niño y la garza', 
		   thumb: 'https://m.media-amazon.com/images/M/MV5BNTY0OTdjZTgtZjMxMi00ZTMzLTg2M2ItZTkyYTJhYTAzMTMxXkEyXkFqcGc@._V1_.jpg', 
		   url: 'https://archive.org/download/271353-c-8a-96984-2768-457c-94aa-acc-6fb-06ebfe-mxui-2375428-1fichier/271353--c8a96984-2768-457c-94aa-acc6fb06ebfe--mxui--2375428-1fichier.MP4'
		  }
		 <!-- ********** SAGA GUARDIANES DE LA GALAXIA **************************************************************************************************** -->
		 ,{ cat: 'Saga Guardianes de la Galaxia', title: 'Volumen 1',
			thumb: 'https://m.media-amazon.com/images/M/MV5BYWI0NTNlN2MtMWRjNy00M2QwLWFlZTgtZTlkMTZiYTU2NTk1XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/guardianes_de_la_galaxia_vol-1/Guardianes.de.la.Galaxia.Vol.1.1080p.AudioLatino.mkv'
		 }
		 ,{ cat: 'Saga Guardianes de la Galaxia', title: 'Volumen 2',
			thumb: 'https://m.media-amazon.com/images/M/MV5BYTQyYzdlYTMtMWU1Ny00Yzg1LWFkODgtOWMyOTgxMTk1M2U1XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/guardianes_de_la_galaxia_vol_2/Guardianes.de.la.Galaxia.Vol.2.1080p.AudioLatino.mkv'
		 }
		 ,{ cat: 'Saga Guardianes de la Galaxia', title: 'Volumen 3',
			thumb: 'https://m.media-amazon.com/images/M/MV5BMzQ2MTJiMzQtYzRlNC00MGJkLTg3NWItMWI0YzE1Y2FhZDBlXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/guardianes_de_la_galaxia_vol-3/Guardianes.de.la.Galaxia.Vol.3.720p.AudioLatino.mkv'
		 }
		 <!-- ********** SAGA NEON GENESIS EVANGELION **************************************************************************************************** -->
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 1',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_01%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 2',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_02_%40Trapo2019_Universo_Anime_.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 3',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_03_%40Trapo2019_Universo_Anime.mkv'
		 }		
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 4',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_04_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 5',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_05_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 6',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_06_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 7',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_07_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 8',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_08_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 9',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_09_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 10',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_10_%40Trapo2019_Universo_Anime.mkv'
		 }		
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 11',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_11_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 12',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_12_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 13',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_13_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 14',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_14_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 15',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_15_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 16',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_16_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 17',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_17_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 18',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_18_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 19',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_19_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 20',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_20_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 21',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_21_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 22',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_22_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 23',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_23_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 24',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_24_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 25',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_25_%40Trapo2019_Universo_Anime.mkv'
		 }
		 ,{ cat: 'Saga NEON GENESIS EVANGELION', title: 'Capitulo 26',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjQzNjg2NGQtMWI2Ny00YmFjLWFlNGItZDI4YTZlMmZkNTQxXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/tpo-neon-genesis-evangelion-05-trapo-2019-universo-anime/Evangelion%20Spanish%20dubs/TPO_Neon_Genesis_Evangelion_26_%40Trapo2019_Universo_Anime.mkv'
		 }

		 <!-- ********** SAGA DESTINO FINAL ************************************************************************************************************************ -->
		,{ cat: 'Saga Destino Final', title: 'Destino Final 1',
			thumb: 'https://m.media-amazon.com/images/M/MV5BZWMwNTc4NjItNzJhZC00OWY5LWE2NGYtMzkwNTZmOTI4YWMzXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/destino-final_202407/Destino%20Final.mp4'
		  }
		 ,{ cat: 'Saga Destino Final', title: 'Destino Final 2',
			thumb: 'https://m.media-amazon.com/images/M/MV5BMzEzMmZiZDgtY2IxNC00ZmNjLTljYzMtZjhjZTRhM2IwN2Y5XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/destino-final_202407/Destino%20Final%202.mp4'
		  }
		 ,{ cat: 'Saga Destino Final', title: 'Destino Final 3',
			thumb: 'https://m.media-amazon.com/images/M/MV5BOWM1NWVmMGQtZTUzNC00NzAwLWIzMmMtMmUwMmQwYzY3MjVkXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/destino-final_202407/Destino%20Final%203.mp4'
		  }
		 ,{ cat: 'Saga Destino Final', title: 'Destino Final 4',
			thumb: 'https://m.media-amazon.com/images/M/MV5BYzY2YWViNDItNWM1NC00MGFhLTg1NzctMGIyYTMwYTk1MTdiXkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/destino-final_202407/Destino%20Final%204.mp4'
		  }
		 ,{ cat: 'Saga Destino Final', title: 'Destino Final 5',
			thumb: 'https://m.media-amazon.com/images/M/MV5BMmUyMWVjYzMtY2M5Yy00NGY5LTg0ZjgtMWUyMWE3ZDgzNjI4XkEyXkFqcGc@._V1_.jpg',
			url: 'https://archive.org/download/destino-final_202407/Destino%20Final%205.mp4'
		  }

		<!-- ********** SAGA SCARY MOVIE ************************************************************************************************************************ -->	  	  
		 ,{ cat: 'Saga Scary Movie', title: 'Scary Movie 1', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZGRmMGRhOWMtOTk3Ni00OTRjLTkyYTAtYzA1M2IzMGE3NGRkXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/image_20240821_2004/Image1.mp4'
		  }	  
		 ,{ cat: 'Saga Scary Movie', title: 'Scary Movie 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNzRhOTIzMTAtNDJkYS00OTAxLTlmNTEtNWY0NGFjNzI4NTZhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/image_20240821_2004/Image2.mp4'
		  }	  
		 ,{ cat: 'Saga Scary Movie', title: 'Scary Movie 3', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_.jpg', 
			url: 'https://archive.org/download/image_20240821_2004/Image3.mp4'
		  }	  	  
		 ,{ cat: 'Saga Scary Movie', title: 'Scary Movie 4', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMjExNDQwM2QtYjFiNy00N2ZlLWE4ZGEtODdmYjY5NDdhNWE3XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/image_20240821_2004/Image.mp4'
		  }
		 ,{ cat: 'Saga Scary Movie', title: 'Scary Movie 5', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BM2NlMjRlZTMtODY5Ni00OGYxLThlYmYtZWQ4MjY1NjVlZjBmXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/image_20240821_2004/Image5.mp4'
		  }	    

		 <!-- ********** PELICULAS STALLONE ************************************************************************************************************************ -->	  
		 ,{ cat: 'Peliculas Stallone', title: 'Riesgo Total', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNGFkZmZhYWYtMTk3Mi00MWE2LWFiNjItZDUzNWY2OGM5ZTBiXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/stalone-coll/stalone%20coll.mp4'
		  }	  
		 ,{ cat: 'Peliculas Stallone', title: 'El Especialista', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMjE1YjU4NzEtNDY4My00ZmQ5LWIxY2YtYzI4ZDU0OGJiYjljXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/stalone-coll/stalone%20coll1.mp4'
		  }	  
		 ,{ cat: 'Peliculas Stallone', title: 'Tango & Cash', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMDQwZGM2OTYtZjFjMy00MzY2LWI1OTUtNmQ4NzE5YmEzNThjXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/stalone-coll/stalone%20coll3.mp4'
		  }	  
		 ,{ cat: 'Peliculas Stallone', title: 'El Vencedor', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZmVjMmYyYzktZjMzYy00NjA3LTk3ODEtOGE5OWVlMmNjY2QyXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/stalone-coll/stalone%20coll4.mp4'
		  }
		 ,{ cat: 'Peliculas Stallone', title: 'Condena Brutal', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BOTVkNDE2ZDUtYjAzOC00OWYyLWI5M2ItNTgxYjAxNGY4ZWFhXkEyXkFqcGc@._V1_FMjpg_UY337_.jpg', 
			url: 'https://archive.org/download/condena-brutal-1989-latino-briant-rb/Condena%20Brutal%20%281989%29%28Latino%29%28Briant%20RB%29.mp4'
		  }
		 ,{ cat: 'Peliculas Stallone', title: 'Asesinos', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYjRmZDUzZTctMzkyMi00ZDY1LTk2MDgtMDI0MTM4ZTYzOWI4XkEyXkFqcGc@._V1_FMjpg_UY337_.jpg', 
			url: 'https://archive.org/download/asesinos-1080p-latino/Asesinos.1080p.Latino.mp4'
		  }
		 
		 <!-- ********** PELICULAS TOM HANKS ************************************************************************************************************************ -->
		 ,{ cat: 'Peliculas Tom Hanks', title: 'El Código DaVinci', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYmJmNDM3NDEtODIwNi00NzBhLWFjZTMtZDI5NmZiMmI0ZWYxXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/nuevo_202410/NUEVO.mp4'
		  }	  
		 ,{ cat: 'Peliculas Tom Hanks', title: 'SULLY', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYjdiOWMwYmItYmYyMy00OGM0LTg0MjItNTY3YzVhMDQwNTA4XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/nuevo_202410/NUEVO1.mp4'
		  }	  
		 ,{ cat: 'Peliculas Tom Hanks', title: 'Ángeles y demonios', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYTgwYmYxMjktNzRkMy00MWQxLTkwNjctOTcyMWFkZTllOTJhXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/nuevo_202410/NUEVO3.mp4'
		  }	  
		 ,{ cat: 'Peliculas Tom Hanks', title: 'Inferno', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BN2U1MTI2MjctYzQ0MC00NDMxLWEyNTctMjhiZWVjMWNiY2ExXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/nuevo_202410/NUEVO4.mp4'
		  }	  
		 <!-- ********** PELICULAS JIM CARREY  ************************************************************************************************************************ -->	  	  
		 ,{ cat: 'Peliculas Jim Carrey', title: 'Irene yo y mi otro yo', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BZjEzYTdkMmUtN2Y3Mi00Mzc5LWJkYTUtYTY4NzUxZTU2NzExXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/aki-videos_202407/AKI_VIDEOS2.mp4'
		  }	  
		 ,{ cat: 'Peliculas Jim Carrey', title: 'La Mascara', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYmNjNjFjNWItNDgxMC00OTMzLWIzZDEtYmIxZDJmNDhiNGFlXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/aki-videos_202407/AKI_VIDEOS3.mp4'
		  }	  
		 ,{ cat: 'Peliculas Jim Carrey', title: 'Las locuras de Dick y Jane', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYmFlMGFkNTEtMmQzYi00ZGNiLTg3MzctNjJkYjdhOWQ4NDAyXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/aki-videos_202407/AKI_VIDEOS4.mp4'
		  }	  
		 ,{ cat: 'Peliculas Jim Carrey', title: 'El Hijo de la Mascara', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTIxNzA5NzIzOV5BMl5BanBnXkFtZTcwOTc5NzcyMQ@@._V1_.jpg', 
			url: 'https://archive.org/download/aki-videos_202407/AKI_VIDEOS5.mp4'
		  }	  	  
		 ,{ cat: 'Peliculas Jim Carrey', title: 'Ace Ventura 1', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BYjA5Y2VjNjItZThlMi00OTgwLTgxODctM2E3MmM5ZmJjNDBiXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/0076-ace-ventura-1-1994-720p-d-sspa-v/0076-Ace%20Ventura%201%20%281994%29%20720p%20D%20Sspa%20v.mkv'
		  }
		 ,{ cat: 'Peliculas Jim Carrey', title: 'Ace Ventura 2', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BOGRhNmRiOWYtYzA1MS00ZGMyLTk1NGQtN2I2MTdhOThmMGRjXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/0076-ace-ventura-1-1994-720p-d-sspa-v/0077-Ace%20Ventura%202%20%281995%29%20720p%20D%20Sspa%20v.mkv'
		  }	  
		 <!-- ********** PELICULAS DRAGON BALL ************************************************************************************************************************ -->
		 ,{ cat: 'Peliculas Dragon Ball', title: 'Dragon Ball Super: Broly', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTA5MTc1M2EtZWQ2Ni00ZmU2LTg3MzQtOTliMjE4OGM0ZWFiXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/dragon-ball-super-broly/Dragon%20Ball%20Super%3A%20Broly.mp4'
		  }
		 ,{ cat: 'Peliculas Dragon Ball', title: 'Dragon Ball Z: La Resurrección De Freezer', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNGZkMWExNjctN2I3ZC00NDYwLTk5ODQtYWMxNTdhNmMzMDA1XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/dragon-ball-z-la-resurreccion-de-freezer/Dragon%20Ball%20Z%3A%20La%20Resurrecci%C3%B3n%20de%20Freezer.mp4'
		  }
		 ,{ cat: 'Peliculas Dragon Ball', title: 'Dragon Ball Z: La Batalla De Los Dioses', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTEzZTFkNzctZTQ0NC00NWI2LWI3OTEtMWEzOGZhZWFiZjg2XkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/dragon-ball-z-la-batalla-de-los-dioses/Dragon%20Ball%20Z%20la%20Batalla%20de%20los%20Dioses.mp4'
		  }
		 ,{ cat: 'Peliculas Dragon Ball', title: 'Dragon Ball Z: El Poder Invencible', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BN2U0MzdjOTItNDg5NS00NWQ0LWE5ZWEtZmRjNDVmY2NmZDFjXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/dbz-08-el-poder-invencible-bluray-full-hd-1080p/DBZ%2008%20-%20El%20Poder%20Invencible%20Bluray%20FullHD%201080p.mkv'
		  }
		 ,{ cat: 'Peliculas Dragon Ball', title: 'Especial 1: La Batalla De Freezer Contra El Padre De Goku', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BMTQwMmMwMDktMmE4Ni00YjVlLWJmNmUtZjIyMTgzMTkwZjIyXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/dbz-especial-1-la-batalla-de-freezer-contra-el-padre-de-goku-bluray-full-hd-1080p/DBZ%20Especial%201%20-%20La%20Batalla%20de%20Freezer%20Contra%20el%20Padre%20de%20Goku%20Bluray%20FullHD%201080p.mkv'
		  }
		 ,{ cat: 'Peliculas Dragon Ball', title: 'Dragon Ball Z: La Fusion De Goku Y Vegeta', 
			thumb: 'https://m.media-amazon.com/images/M/MV5BNjIyNGY0OWYtY2JlNS00ODVjLWJiODEtYWNlNWZjNDMzZjUzXkEyXkFqcGc@._V1_.jpg', 
			url: 'https://archive.org/download/dbz-la-fusion-de-goku-y-vegeta/DBZ%20-%20La%20Fusion%20De%20Goku%20y%20Vegeta.mp4'
		  }
		];

const grid = document.getElementById('peli-grid');
const menu = document.getElementById('menu-cats');
const playerBox = document.getElementById('player-box');
const video = document.getElementById('video-element');
let uiTimer;

// 1. GENERAR CATEGORÍAS
const categorias = ['Todos', ...new Set(movies.map(m => m.cat))];
categorias.forEach(c => {
	const li = document.createElement('li');
	li.className = `categoria-item ${c === 'Todos' ? 'activa' : ''}`;
	li.innerHTML = `<i class="fas fa-folder"></i> <span>${c}</span>`;
	li.onclick = () => {
		document.querySelectorAll('.categoria-item').forEach(i => i.classList.remove('activa'));
		li.classList.add('activa');
		mostrarPelis(c);
	};
	menu.appendChild(li);
});

function mostrarPelis(cat) {
	document.getElementById('seccion-txt').innerText = cat;
	const filtradas = cat === 'Todos' ? movies : movies.filter(m => m.cat === cat);
	grid.innerHTML = filtradas.map(p => `
		<div class="peli-card" onclick="lanzarPeli('${p.url}')">
			<img src="${p.thumb}" loading="lazy">
			<div style="padding:10px; text-align:center; font-size:13px;">${p.title}</div>
		</div>
	`).join('');
}

// 2. LÓGICA DE INTERFAZ DESVANECIENTE
function lanzarPeli(url) {
	if(url === '#') return;
	video.src = url;
	playerBox.style.display = 'flex';
	video.play();
	resetUI();
}

function resetUI() {
	playerBox.classList.add('show-ui'); // Muestra todo (incluyendo la X)
	clearTimeout(uiTimer);
	
	// Si no hay movimiento en 3 segundos, se desvanece
	uiTimer = setTimeout(() => {
		if (!video.paused) {
			playerBox.classList.remove('show-ui');
		}
	}, 3000);
}

// Detectores de movimiento
playerBox.onmousemove = resetUI;
playerBox.onclick = resetUI;
playerBox.ontouchstart = resetUI;

// Botón cerrar (X)
document.getElementById('close-peli').onclick = (e) => {
	e.stopPropagation();
	video.pause();
	playerBox.style.display = 'none';
};

// Play/Pause central
const btnPlay = document.getElementById('master-play');
btnPlay.onclick = () => {
	if (video.paused) {
		video.play();
		btnPlay.innerHTML = '<i class="fas fa-pause"></i>';
	} else {
		video.pause();
		btnPlay.innerHTML = '<i class="fas fa-play"></i>';
		playerBox.classList.add('show-ui'); // Queda visible si está en pausa
		clearTimeout(uiTimer);
	}
};

// Barra de progreso
video.ontimeupdate = () => {
	document.getElementById('seek-bar').value = (video.currentTime / video.duration) * 100;
};

document.getElementById('seek-bar').oninput = function() {
	video.currentTime = (this.value * video.duration) / 100;
};

mostrarPelis('Todos');
