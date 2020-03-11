module.exports = {
	// Enter copy提示文
	DungeonInfo : [
		{zone: 9066, string: 'Enter copy <font color="#56B4E9">Roulette</font>'},
		{zone: 9059, string: 'Enter copy <font color="#56B4E9">Bernstein Ghost Island</font> <font color="#E69F00">Subordinate</font>'},
		{zone: 9759, string: 'Enter copy <font color="#56B4E9">Bernstein Ghost Island</font> <font color="#00FFFF">Superior</font>'},
		{zone: 9767, string: 'Enter copy <font color="#56B4E9">Ferreno laboratory</font> <font color="#E69F00">Subordinate</font>'},
		{zone: 9067, string: 'Enter copy <font color="#56B4E9">Ferreno laboratory</font> <font color="#00FFFF">Superior</font>'},
		{zone: 9770, string: 'Enter copy <font color="#56B4E9">Ruins of La Canris</font> <font color="#E69F00">Subordinate</font>'},
		{zone: 9970, string: 'Enter copy <font color="#56B4E9">Ruins of La Canris</font> <font color="#00FFFF">Superior</font>'},
		{zone: 9781, string: 'Enter copy <font color="#56B4E9">Berwick Temple</font> <font color="#E69F00">Subordinate</font>'},
		{zone: 9981, string: 'Enter copy <font color="#56B4E9">Berwick Temple</font> <font color="#00FFFF">Superior</font>'},
		{zone: 9735, string: 'Enter copy <font color="#56B4E9">RK-9 hangar</font> <font color="#E69F00">Subordinate</font>'},
		{zone: 9935, string: 'Enter copy <font color="#56B4E9">RK-9 hangar</font> <font color="#00FFFF">Superior</font>'},
		{zone: 9739, string: 'Enter copy <font color="#56B4E9">Revolutionary headquarters</font> <font color="#E69F00">Subordinate</font>'},
		{zone: 9939, string: 'Enter copy <font color="#56B4E9">Revolutionary headquarters</font> <font color="#00FFFF">Superior</font>'},
		{zone: 9720, string: 'Enter copy <font color="#56B4E9">Abyss of Antalos</font> <font color="#E69F00">Subordinate</font>'},
		{zone: 9920, string: 'Enter copy <font color="#56B4E9">Abyss of Antalos</font> <font color="#00FFFF">Superior</font>'},
		{zone: 3017, string: 'Enter copy <font color="#56B4E9">Abyss of Antalos</font> <font color="#FF0000"> 7人</font>'},
		{zone: 9783, string: 'Enter copy <font color="#56B4E9">Teneblis castle</font> <font color="#E69F00">Subordinate</font>'},
		{zone: 9983, string: 'Enter copy <font color="#56B4E9">Teneblis castle</font> <font color="#00FFFF">Superior</font>'},
		{zone: 3018, string: 'Enter copy <font color="#56B4E9">Teneblis castle</font> <font color="#FF0000"> 7人</font>'},
		{zone: 9782, string: 'Enter copy <font color="#56B4E9">Lean's Underground Temple</font> <font color="#E69F00">Subordinate</font>'},
		{zone: 9982, string: 'Enter copy <font color="#56B4E9">Lean's Underground Temple</font> <font color="#00FFFF">Superior</font>'},
		{zone: 3019, string: 'Enter copy <font color="#56B4E9">Lean's Underground Temple</font> <font color="#FF0000"> 7人</font>'},
		{zone: 3101, string: 'Enter copy <font color="#56B4E9">Fairquina Lair</font> <font color="#E69F00">Subordinate</font>'},
		{zone: 3201, string: 'Enter copy <font color="#56B4E9">Fairquina Lair</font> <font color="#00FFFF">Superior</font>'},
		{zone: 3023, string: 'Enter copy <font color="#56B4E9">Beljac castle</font>'},
		{zone: 3020, string: 'Enter copy <font color="#56B4E9">Golden Scale</font>'},
		{zone: 3026, string: 'Enter copy <font color="#56B4E9">Kelsey Hidden Ground</font> <font color="#E69F00">Subordinate</font>'},
		{zone: 3126, string: 'Enter copy <font color="#56B4E9">Kelsey Hidden Ground</font> <font color="#00FFFF">Superior</font>'},
		{zone: 3027, string: 'Enter copy <font color="#56B4E9">Berserk Arena</font>'}
	],
	// 岱魔鲁斯的轮盘 (Demon's Wheel)
	DW_BOSS_1 : [
		{id: 105, msg: 'Jump (vertigo)'},
		{id: 106, msg: 'Exhaust (repelled)'},
		{id: 109, msg: 'Smash Forward (Halo Tan)'},
		{id: 110, msg: 'Tail flick (poisoning)'},
		// > 50%
		{id: 306, msg: '+1ring'},
		{id: 307, msg: '+2ring'},
		{id: 308, msg: '+3ring'},
		{id: 309, msg: '+4ring'},
		{id: 310, msg: '+5ring'},
		// < 50%
		{id: 319, msg: '+1ring'},
		{id: 320, msg: '+2ring'},
		{id: 321, msg: '+3ring'},
		{id: 322, msg: '+4ring'},
		{id: 323, msg: '+5ring'},
		// 鉴定 - 计算总ring数(双数为blue/单数为red)
		{id: 311, msg: '↓ Outring ↓'}, // 王-redbuff
		{id: 315, msg: '↓ Outring ↓'}, // 王-redbuff
		{id: 313, msg: '↓ Outring ↓'}, // 王-bluebuff
		{id: 317, msg: '↓ Outring ↓'}, // 王-bluebuff
		// 相同Enterring 不同Outring
		{id: 312, msg: '↑ Enterring ↑'}, // 王-redbuff
		{id: 316, msg: '↑ Enterring ↑'}, // 王-redbuff
		{id: 314, msg: '↑ Enterring ↑'}, // 王-bluebuff
		{id: 318, msg: '↑ Enterring ↑'}  // 王-bluebuff
	],
	DW_TipMsg1: ["Double (blue)", "single (red)"],
	DW_BOSS_2 : [
		{id: 113, msg: 'laser!!'},
		{id: 116, msg: 'Pull people (group)'},
		// 217 bluering - 1次伤害
		{id: 223, msg: 'Red ring-2 damage'},
		{id: 303, msg: 'Hit throw'},
		{id: 309, msg: 'Enter Field | Wang Ju (blue) Enterring'},
		{id: 310, msg: 'Enter Field | Wang Ju (Red) Ball Time Enterring'},
		// 王举(blue)球
		{id: 311, msg: '↑ Enterring(blue) ↑'},
		{id: 313, msg: '↓ Outring(blue) ↓'},
		// 王举(red)球
		{id: 314, msg: '↑ Enterring(red) ↑'},
		{id: 312, msg: '↓ Outring(red) ↓'}
	],
	DW_TipMsg2: [
		"Next -> ",
		"red(Along) | (blue+White)", "White(Along) | (red+blue)", "blue(Along) | (red+White)", // 466050   466051   466052
		"All!!",
		"red(Reverse)",           "White(Reverse)",           "blue(Reverse)"            // 466054   466055   466056
	],
	// 伯恩斯坦恶灵岛 (Forsaken Island)
	FI_BOSS_1 : [
		{id: 1104, msg: 'Big jump(dizziness)'},
		{id: 2104, msg: 'Big jump(dizziness)'},
		{id: 1106, msg: 'Spin attack'},
		{id: 2106, msg: 'Spin attack'},
		{id: 3107, msg: 'Roll call (front knockback)'}
		// 3111 curse
		// 3106 鉴定-outer ring爆炸
		// 3101 鉴定-Inside ring爆炸
	],
	FI_BOSS_2 : [
		{id: 3101, msg: 'jump(repel)'},
		{id: 3102, msg: 'yellow ringx5(dodge)'},
		{id: 3104, msg: 'Full screen attack!!'},
		{id: 3105, msg: 'Draw | push away'},
		{id: 3107, msg: 'poison ringx1(dodge)'}
	],
	FI_BOSS_3 : [
		{id: 1101, msg: '← diffusion →'},
		{id: 2101, msg: '← diffusion →'},
		{id: 1102, msg: '→ Draw ←'},
		{id: 2102, msg: '→ Draw ←'},
		/* 
		{id: 1106, msg: 'Beware of carpet'}, // 前方导弹
		{id: 2106, msg: 'Beware of carpet'},
		{id: 1107, msg: 'Beware of carpet'}, // 后方导弹
		{id: 2107, msg: 'Beware of carpet'},
		{id: 1108, msg: 'Beware of carpet'}, // 右方导弹
		{id: 2108, msg: 'Beware of carpet'},
		{id: 1109, msg: 'Beware of carpet'}, // 左方导弹
		{id: 2109, msg: 'Beware of carpet'},
		 */
		{id: 1110, msg: '↓ Thunderbolt ↓'},
		{id: 2110, msg: '↓ Thunderbolt ↓'},
		
		{id: 3105, msg: 'Roll call(dodge)'},
		{id: 3108, msg: 'cursex2'},
		{id: 3109, msg: 'Carpet identification'}
	],
	FI_TipMsg : ["curse | inside and outside ring", "cursex2", "Be careful laser!"],
	// Ferreno laboratory (Demokron Factory)
	DF_BOSS_1 : [
		
	],
	DF_BOSS_2 : [
		
	],
	DF_BOSS_3 : [
		{id: 205, msg: 'repel(Slowly)'},
		{id: 218, msg: 'repel'},
		{id: 211, msg: 'diffusion (Inside-> Outside)'},
		{id: 212, msg: 'Shrink (outer-> inner)'},
		{id: 219, msg: 'inside and outside Simultaneously'}
	],
	// Ruins of La Canris (Ruinous Manor)
	RM_BOSS_1 : [
		{id: 107, msg: 'Front spray (tan)'}
	],
	RM_BOSS_2 : [
		{id: 106, msg: 'Ground(dizziness)'},
		{id: 111, msg: 'Continuous attack (unstoppable)'}
	],
	RM_BOSS_3 : [
		// 102 101 103          After spray
		{id: 103, msg: 'After spray(Thug)'},
		// 101 102 104 105     不推
		// 101 102 104 106 107 推坦
		{id: 106, msg: 'Push forward (tan)'},
		{id: 110, msg: 'Tail sweep!!'}, // 108 110 111
		// 317 分散吃球
		// 319 分散吃球 愤怒
		{id: 113, msg: '↓ Outring ↓'}, // 113  114 115
		{id: 116, msg: '↑ Enterring ↑'}, // 116  117 118
		// < 30% 
		{id: 311, msg: 'Push people!!'},
		{id: 322, msg: 'fate!!(Make up the king buff)'}
	],
	// Berwick Temple (Velik's Sanctuary)
	VS_BOSS_1 : [
		{id: 301, msg: 'Silence (all)'},
		{id: 304, msg: 'inside and outside ring'},
		{id: 401, msg: 'Wield the knife → → → → → →'},
		{id: 402, msg: '← ←← ←←← Sword Sword'}
	],
	VS_BOSS_2 : [
		{id: 106, msg: '↓ After smashing ↓'},
		{id: 108, msg: '↑ After smashing ↑'},
		{id: 131, msg: 'Wield the knife → → → → → →'},
		{id: 130, msg: '← ←← ←←← Sword Sword'},
		{id: 134, msg: 'gaze'}
	],
	VS_BOSS_3 : [
		{id: 116, msg: 'Front shield smashing (halo) | sweet ring (hit fly)'},
		{id: 138, msg: 'Off!!'},
		{id: 144, msg: '↓ outer ring Safety ↓'},
		{id: 145, msg: '↑ Inside ring Safety ↑'},
		// 149 前刺(坦)
		{id: 151, msg: '↓ Hit the ground(dizziness) + Roll call(Three catch)'},
		{id: 152, msg: 'After smashing(dizziness) | Kick back(repel)'},
		{id: 701, msg: 'Sweep back(repel) |Forward stamp(dodge)'},
		{id: 103, msg: 'Lightning (min)'},
		{id: 301, msg: 'Bomb (set) | Purge'},
		{id: 404, msg: 'gaze (near)'},
		(id: 105, msg: 'Lightning (set)'),
		{id: 302, msg: 'Bomb (set) | Add blood'},
		{id: 405, msg: 'gaze (far)'},
		{id: 401, msg: 'Dispelled !!'},
		{id: 402, msg: 'Halo King !!'}
	],
	//            0           1           2           3           1+3=4       2+3=5       3+3=6
	VS_TipMsg: ["Next->", "Note (near x2)", "Flash (scattered)", "Fried (unzipped)", "Note (far x2)", "Flash (focused)", "Fried ( add blood)"],
	// RK-9 hangar (RK-9 Kennel)
	RK_BOSS_1 : [
		{id: 104, msg: '→ front clip (halotan) ←'},
		{id: 112, msg: '↓ After smashing ↓'},
		{id: 304, msg: 'Opening | Inside ring explosion !!'},
		{id: 305, msg: 'Opening | outer ring explosion !!'},
		{id: 306, msg: 'Demolition Bomb !!'},
		{id: 307, msg: 'Pull people (group)'},
		{id: 309, msg: 'jump hop !!'},
		// Superior披萨鉴定
		{id: 315, msg: '↑ ↗ Forward right'}, // 1
		{id: 319, msg: '↑ ↗ Forward right'},
		{id: 311, msg: '↗↗ top right'}, // 2
		{id: 323, msg: '↗↗ top right'},
		{id: 312, msg: '↘↘ bottom right'}, // 3
		{id: 324, msg: '↘↘ bottom right'},
		{id: 316, msg: '↓ ↘ After the right'}, // 4
		{id: 320, msg: '↓ ↘ After right'},
		{id: 313, msg: '↙ ↓ rear left'}, // 5
		{id: 321, msg: '↙ ↓ After left'},
		{id: 317, msg: '↙↙ bottom left'}, // 6
		{id: 325, msg: '↙↙ bottom left'},
		{id: 318, msg: '↖↖ upper left'}, // 7
		{id: 322, msg: '↖↖ upper left'},
		{id: 314, msg: '↖ ↑ front left'}, // 8
		{id: 326, msg: '↖ ↑ front left'}
	],
	RK_BOSS_2 : [
		{id: 102, msg: 'After smashing (medium poison)'},
		{id: 108, msg: 'After spray(repel)'},
		{id: 105, msg: 'Repel (repel)'),
		// Superior
		{id: 305, msg: 'Adsorption (near)'),
		{id: 304, msg: 'Explode (away) !!'}
	],
	RK_BOSS_3 : [
		{id: 117, msg: 'S fist left hand ←←'}, // 117 121 123
		{id: 118, msg: 'S fist left hand ←←'}, // 118 121 123
		{id: 116, msg: 'S fist →→ right hand'}, // 116 120 122
		{id: 119, msg: 'S fist →→ right hand'}, // 119 120 122
		{id: 128, msg: 'Rocket Fist | After spray'},
		// 128 129 fire箭拳 | 130 131 After spray
		{id: 321, msg: 'Broken Shield !!'},
		{id: 323, msg: 'radar !!'},
		{id: 324, msg: 'Inside ringdizziness'}
		// 305 鉴定
	],
	RK_TipMsg : ["Next -> ", "近", "远", "全", "BOSS将会在10SInside Out护盾"],
	// Revolutionary headquarters (Red Refuge)
	RR_BOSS_1 : [
	
	],
	RR_BOSS_2 : [
		{id: 119, msg: 'Front Spray'},
		{id: 120, msg: 'After spray'}
	],
	RR_BOSS_3 : [
		{id: 115, msg: 'dizziness !!'},
		{id: 175, msg: 'Dizziness'},
		{id: 201, msg: 'True Dodge')}
	],
	// Abyss of Antalos (Antaroth's Abyss)
	AA_BOSS_1 : [
		{id: 116, msg: '↓ Outring ↓'},
		{id: 117, msg: '↑ Enterring ↑'},
		{id: 300, msg: '~ I want to fly higher ~'}
	],
	AA_BOSS_2 : [
		{id: 119, msg: 'curse!!'}
	],
	AA_BOSS_3 : [
		{id: 104, msg: 'After smashing'},
		{id: 113, msg: 'After smashing | After smashing'},
		{id: 202, msg: 'Backward | turn ring'},
		{id: 109, msg: 'Wield the knife → → → → → →'},
		{id: 111, msg: '← ←← ←←← Sword Sword'},
		{id: 310, msg: 'water wave'},
		{id: 311, msg: 'Water wave'},
		{id: 312, msg: 'Water wave'},
		{id: 313, msg: 'water wave'},
		{id: 314, msg: 'Water wave'},
		{id: 400, msg: 'Phantom x3 Jianqi'}, // Three Phantoms-Jianqi 205 500 400 204 204
		{id: 401, msg: 'Phantom x3 to ring'} // Three phantoms-ring 205 500 401 115 309
	],
	// Teneblis castle (Dark Reach Citadel)
	DRC_BOSS_1 : [
		{id: 108, msg: 'dizziness'},
		{id: 109, msg: 'Sweep back (repel)'},
		{id: 119, msg: 'Charging the ground'},
		{id: 127, msg: 'Thunderbolt !!'}
	],
	DRC_BOSS_2 : [
		{id: 105, msg: 'Roll call'),
		{id: 110, msg: 'After smashing (dodge)'},
		{id: 111, msg: 'Right Kick back (repel)'},
		{id: 115, msg: 'left Kick back (repel)'},
		{id: 119, msg: 'jump (dizziness)'},
		{id: 120, msg: 'Kick back (repel)'},
		{id: 316, msg: 'fire flame (explosion)'},
		{id: 317, msg: 'Water Wave (Flight)'},
		{id: 318, msg: 'rug (dizziness)'}
	],
	DRC_BOSS_3 : [
		{id: 106, msg: 'repel' ',
		{id: 109, msg: 'Dizziness'},
		{id: 112, msg: 'Sweep back (repel)'},
		{id: 301, msg: 'Stab (Flight)'),
		{id: 303, msg: '→→→→ right'},
		{id: 306, msg: 'left ←←←←'},
		{id: 309, msg: 'gaze !!'},
		{id: 315, msg: 'Fear (Suck blood)'}
	],
	DRC_TipMsg : ["100% energy !!"],
	// Lean's Underground Temple (Grotto of Lost Souls)
	GLS_BOSS_1 : [
		(id: 106, msg: 'Bash (tan)'),
		{id: 107, msg: 'After spray (repel)'},
		{id: 109, msg: 'Rolling Stone (Small)'},
		{id: 110, msg: 'Rolling Stone (Large)'),
		{id: 116, msg: 'Full screen attack !!'},
		{id: 301, msg: 'dizziness'},
		{id: 307, msg: 'Cage (Confinement)'),
		{id: 309, msg: '1 flower-identification !!'},
		{id: 310, msg: '2 flowers-identification !!'},
		{id: 312, msg: 'Golden Flower !!'}
	],
	GLS_BOSS_2 : [
		{id: 105, msg: 'roll over'},
		{id: 113, msg: 'dizziness'},
		{id: 114, msg: 'Triple floor (close)'},
		{id: 116, msg: 'After smashing | After smashing'},
		{id: 301, msg: '↓ (Ground (away) | rotate (repel)'},
		{id: 302, msg: '↑ Rotate (close) | | Ground (fly)'}
	],
	GLS_BOSS_3 : [
		{id: 118, msg: 'Triple Combo (Left-Right-Spurt)'},
		{id: 143, msg: 'Left left →→'},
		{id: 145, msg: 'left back →→'},
		{id: 146, msg: 'diffusion →→'},
		{id: 154, msg: 'diffusion →→'},
		{id: 144, msg: '←← back right'},
		{id: 147, msg: '←← back right'},
		{id: 148, msg: '←← back right (diffusion)'},
		{id: 155, msg: '←← back right (diffusion)'},
		{id: 161, msg: 'After smashing | After smashing'},
		{id: 162, msg: 'After smashing | After smashing'},
		{id: 213, msg: 'tail !!'},
		{id: 215, msg: 'Tail !!'},
		{id: 139, msg: '←← the left side of the king Safety (Along)'}, // 151
		{id: 150, msg: '←← King's left side Safety (Along)'}, // 151
		(id: 141, msg: '(Reverse) King's right Safety →→'}, // 153
		(id: 152, msg: '(Reverse) King's right Safety →→'}, // 153
		{id: 300, msg: 'One Awakening (Pushing People)', level_Msg: ['One layer!', 'Two layers !!', 'Three layers !!!', '<font color = "# FF0000"> Explosion !!!! </ font> ']},
		{id: 399, msg: 'Second Awakening (Pushing People)', level_Msg: ['One Layer!', '<font color = "# FF0000"> Explosion !! </ font>']},
		{id: 360, msg: 'Explosion !! Explosion !!'}
	],
	// Fairquina Lair (Gossamer Vault)
	GV_BOSS_1 : [
		{id: 124, msg: 'Smash Forward (Halo Tan)'},
		{id: 104, msg: '(Slow) Smash Forward (Halo Tan)'},
		{id: 133, msg: 'Jump (Fly)'},
		{id: 113, msg: '(Slow) Flutter (Fly)'},
		{id: 138, msg: 'Jump (Fly)'},
		(id: 118, msg: '(slow) flutter (fly)'),
		// 147 consecutive forward attacks
		{id: 149, msg: 'Left Hand Charge (Flight)'},
		{id: 148, msg: 'Right-handed charge (fly)',
		
		{id: 127, msg: '| Straight After Spray |'},
		{id: 107, msg: '(slow) | straight line After spray |'},
		{id: 131, msg: 'After spray'},
		{id: 111, msg: '(slow) After spray'},
		{id: 132, msg: '← left and right spray →'},
		(id: 112, msg: '(slow) ← left and right jet →'),
		{id: 139, msg: '↑ Before After spraying ↓'},
		{id: 119, msg: '(Slow) ↑ Before After spray ↓'},
		{id: 314, msg: 'inside and outside ring'},
		{id: 313, msg: '(slow) inside and outside ring'},
		
		{id: 305, msg: 'Pizza'}, // 143 / 145
		
		{id: 312, msg: 'full screen (repel)'},
		{id: 311, msg: '(slow) full screen (repel)'}
	],
	GV_BOSS_2 : [
		(id: 105, msg: 'forward stab'), // 104 105
		{id: 109, msg: 'Slowly' '},
		{id: 108, msg: 'Front Insertion | After spray (repel)'},
		{id: 228, msg: 'Supplemental teacher plus blood'},
		{id: 227, msg: 'dodge !!'},
		{id: 230, msg: 'Pollen explosion !!'},
		{id: 231, msg: '↓ Outring ↓'},
		{id: 232, msg: '↑ Enterring ↑'},
		{id: 235, msg: 'gaze!!'},
		{id: 236, msg: 'Roll call (front knockback)'}
	],
	// Beljac castle (Akalath Quarantine)
	AQ_BOSS_1 : [
		{id: 1104, msg: 'Big jump (dizziness)'},
		{id: 2104, msg: 'Big jump (dizziness)'},
		{id: 1110, msg: 'dizziness'},
		{id: 2110, msg: 'Dizziness' '',
		{id: 1111, msg: '↓ Zola'},
		{id: 1113, msg: '↓ Zola'}, // 1112 1113
		{id: 2111, msg: '↓ Zola'},
		{id: 2113, msg: '↓ Zola'}, // 2112 2113
		{id: 1112, msg: 'right pull ↓'},
		{id: 1114, msg: 'right pull ↓'}, // 1111 1114
		{id: 2112, msg: 'Right pull ↓'},
		{id: 2114, msg: 'Right pull ↓'}, // 2111 2114
		{id: 1115, msg: 'second half ring'},
		{id: 2115, msg: 'second half ring'},
		{id: 1116, msg: 'Explosion (open shield) !!'}, // 1117
		{id: 2116, msg: 'Explosion (open shield) !!'}, // 2117
		{id: 3107, msg: 'Roll call (front knockback)'},
		{id: 3115, msg: 'Spin attack'}, // 1106 2106
		{id: 3116, msg: 'Little ring | Spin attack'}, // 1106 2106
		{id: 3119, msg: 'curse', TIP: ["↓ Out ↓", "↑ Enter ↑"]}, // redOut | blueEnter
		{id: 3220, msg: 'curse', TIP: ["↑ Enter ↑", "↓ Out ↓"]} // redEnter | blueOut
	],
	AQ_BOSS_2 : [
		{id: 164, msg: 'charge back (bleed)'},
		{id: 166, msg: 'Turn around Roll call'}, // 169 166
		{id: 175, msg: 'dizziness!'},
		{id: 181, msg: 'Ground board (straight line)'),
		// 214 Ground板x3 181
		{id: 182, msg: 'Step down (knock down)'), // 183 184
		// 302 209 Roll call-踩地(击倒) 182 183 184
		{id: 185, msg: 'Explosion (open shield) !!'},
		{id: 202, msg: 'back | forward stab'}, // 177
		{id: 207, msg: 'Phantom x5 (bleed)'}, // 204 206 205
		(id: 212, msg: 'flash (bleed)') // 180
	],
	// 金麟號 (Sailing Instance)
	SI_BOSS_1 : [
		{id: 104, msg: 'Suck blue(dodge)'}
	],
	SI_BOSS_2 : [
		{id: 103, msg: 'Suck blue(dodge)'}
	],
	SI_BOSS_3 : [
		{id: 108, msg: 'Charge (Halo Tan)'},
		{id: 128, msg: 'Golf (fly)'},
		{id: 129, msg: 'Vendetta-Straight Skull'},
		{id: 135, msg: "skipping rope"},
		{id: 204, msg: "30% transformation"},
		{id: 137, msg: 'diffusion'},
		{id: 139, msg: 'Shrink'),
		{id: 133, msg: 'diffusion'),
		{id: 127, msg: '', TIP: ["close", "After smashing"]},
		
		{id: 121, msg: ''},         // After smashing(outer ) | 转ring(Inside ) (绿)_来吧  +No.1 buff
		{id: 122, msg: ''},         // 转ring(Inside ) | After smashing(outer ) (紫)_Off  +No.1 buff
	//  {id: 124, msg: 'After smashing'},     // 第一击 / 第二击
	//  {id: 125, msg: '转ring'},     // 第一击 / 第二击
		{id: 123, msg: ''},         // 蓄力After smashing | ↓(outer )↓ (绿)_爆炸  +No.2 buff
		{id: 120, msg: ''},         // 蓄力转ring | ↑(Inside )↑ (紫)_深渊  +No.2 buff
	//  {id: 126, msg: '大After smashing'},  // 第三击
	//  {id: 134, msg: '大转ring'},  // 第三击
	],
	//           121+120=241 122+120=242           121+123=244 122+123=245
	SI_TipMsg : ["outer -Inside -Inside ", "Inside -outer -Inside ","闪避!!!", "outer -Inside -outer ", "Inside -outer -outer "],
	// Kelsey Hidden Ground(Corrupted Skynest)
	CK_BOSS : [
		// 120 猛烈的咆哮
		// 162 猛烈的咆哮
		// 106 前方-驴打滚
		// 156 前方-驴打滚
		// 205 前方jump(回避)
		// 206 后方jump(dodge)
		// 131 广域1实例
		(id: 103, msg: 'Tail (Flying !!)'),
		(id: 153, msg: 'Tail (Flying !!)'),
		{id: 108, msg: 'Turn right (repel !!)'},
		{id: 158, msg: 'Turn right (repel !!)'},
		{id: 109, msg: 'Turn left (repel !!)'},
		{id: 159, msg: 'Turn left (repel !!)'),
		{id: 118, msg: '~ I want to fly higher ~'},
		{id: 160, msg: '~ I want to fly higher ~'},
		{id: 137, msg: '[Outrageous] Keck Seck Builds Strength'},
		{id: 138, msg: 'Wide range repel !!'},
		{id: 110, msg: 'Fire DOT (Away)'},
		{id: 112, msg: 'Air-conditioned DOT (away)'},
		{id: 114, msg: 'DOT ahead (away)',
		{id: 139, msg: '[temperature] 60 ° all (fire)'},
		{id: 140, msg: '[temperature] 40 ° all (ice)'},
		// 164 [温度] 100° 全灭
		// 165 [温度] 0° 全灭
		// 切换DeBuff
		// 101 右脚(fire_闪避)
		// 151 右脚(fire_闪避)
		// 102 左脚(ice_格挡)
		// 152 左脚(ice_格挡)
		// 107 双脚_快
		// 157 双脚_快
		{id: 145, msg: 'boshes_dizziness'},
		{id: 104, msg: 'AOE-Ice Magic (Large)'},
		{id: 154, msg: 'AOE-Frost Magic (Small)'},
		{id: 105, msg: 'AOE-Fire Magic (Large)'},
		{id: 155, msg: 'AOE-Fire Magic (Small)'},
		// inside and outside 鉴定
		{id: 212, msg: 'Inside fire '}, // 212 -> 141
		{id: 213, msg: 'Inside ice '}, // 213 -> 143
		{id: 214, msg: 'Inside ice '}, // 214 -> 142
		{id: 215, msg: 'Inside fire '}, // 215 -> 144
	// 以下未知
		{id: 119, msg: 'Faint growl'},
		{id: 161, msg: 'Faint growl'},
		{id: 124, msg: 'Weak altitude'},
		{id: 163, msg: 'Weak altitude'},
		
		{id: 116, msg: '(for Fire Blaise) full of vitality'}, // "(화염 브레스 용) 액티브 무브 _Run_ 노멀"
		{id: 117, msg: 'fire flame blues'}, // "화염 브레스 _breath_ 노멀"
		
		{id: 121, msg: 'Resurrection curse'}, // // "Resurrection Curse_SpwanNpc_Normal"
		{id: 122, msg: 'calling subordinates'}, // "Load Recall_reactionAtk_Normal"
		{id: 123, msg: 'Waiting-Magnetic Gain Spell'}, // "Magnetic buff_Wait_normal"
		
		{id: 125, msg: 'Close-up is prohibited'}, // "Prohibit close_up_SpawnNpc_ Normal"
		{id: 126, msg: 'Remote forbidden launch'}, // "/ ban _ trigger _SpawnNpc_ normal"
		{id: 127, msg: 'Restart is prohibited'}, // "} support _ trigger _SpawnNpc_ normal"
		{id: 128, msg: 'Close-up prohibited end'}, // "Prohibit close_end _SpawnNpc_ normal"
		{id: 129, msg: 'Remote disabled end'}, // "distance forbidden _ end _SpawnNpc_ normal"
		{id: 130, msg: 'Forbidden to end'}, // "no recovery _ end _SpawnNpc_ normal"
		
		{id: 132, msg: 'Target Summon (475)'}, // "Summon an Object (475) _aggrochange_Normal"
		{id: 133, msg: 'Target Summon (3026)'}, // "Summon an object (3026) _aggrochange_normal"
		{id: 134, msg: 'Wide area one person slave'}, // "Global single slave_aggrochange_normal"
		
		{id: 135, msg: '[Runaway] Keck Sack's Powerful Roar'}, // "[Runaway] Kelsyike_Strong Roar_Roar_Normal"
		{id: 136, msg: '[Runaway] Kick Seck Loop Action'}, // "[Runaway] Kelsy_Loop Motion_Normal"
		
		{id: 150, msg: 'mobile-active' ', // "ActiveMove_Run_Normal"
		{id: 201, msg: 'shoo hoo ho action'}, // // "Movement_Groggy_Normal"
		{id: 204, msg: 'substitution'}, // // "AgroChange_aggrochange_Normal"
		{id: 209, msg: 'Mode reminder'}, // // "ModeAlarm_Dummy"
		{id: 210, msg: 'Sponsor Action'}, // // "Sponsor_Spawn_Normal"
		{id: 211, msg: 'for end of rotation'}, // "For mode end_ModeAlarm_normal"
		{id: 302, msg: 'random Buff'} // "Invincible buff_wait_normal"
	],
	//            0     1
	CK_TipMsg : ["↑ Enter ↑", "↓ Out ↓"],
	// Berserk Arena()
	KQ_BOSS : [
		(id: 108, msg: 'One Sword (Slow)'), // 101 121 122 Continuous Attack-> 108 One Sword (Tan)
		{id: 355, msg: 'chin crushing'}, // 102 121 103 continuous attack-> 355 right hand charge-> 114 jaw crushing
		{id: 135, msg: 'One knife (slow)'}, // 104 consecutive attacks-> 135 left-handed charge-> 130 two swords
		{id: 111, msg: 'dizziness | One Sword'}, // 104 consecutive attacks-> 111 blade back strike-> 130 two swords
		{id: 112, msg: 'Jump Back | One Sword'}, // 121 102 Continuous Attacks-> 112 Backward Kicks-> 130 Two Swords
		{id: 109, msg: 'Jump forward | One Sword'}, // 109 Slash Down-> 402 Wait-> 130 Two Swords
		
		{id: 116, msg: 'Perfect Block'}, // 116 Slash
		{id: 140, msg: 'Perfect Block'}, // 140 Slash
		
		{id: 145, msg: '3ring | Slash'}, // 145 Slash Slash 139 Slash Slash x2-> 140 Slash
		{id: 136, msg: '2ring | One Sword'}, // 136 Sever slash 144 Slash Slash x1-> 130 Sever and two breaks
		
		{id: 141, msg: 'Round | One Sword'}, // 141 Destroyer + Maneuver x2-> 146 114 130
		{id: 146, msg: 'chin | one cut'}, // 146 one cut and two breaks-> 114 chin crush-> 130 one cut and two breaks
		{id: 142, msg: 'Round | Chin'}, // 142 Destroyer + Maneuver x2-> 143 114 130
		{id: 143, msg: 'One Sword'}, // 143 One Sword and Two Breaks (Cancel)-> 114 Chin Crush-> 130 One Sword and Two Breaks
		
		{id: 151, msg: 'Three Cuts | One Sword'}, // 151 149 148 Three Cuts-> 130 One Sword and Two Breaks
		{id: 117, msg: 'Flash call (Roll call)'}, // 117 Flash call-> 130
		{id: 356, msg: 'Flash call (Roll call)'}, // 356 Flash call-> 147
		{id: 134, msg: 'Vital (turn around)'), // 134 Vital Attack-> 147 kill two swords
		
		{id: 357, msg: 'Purple-> Explosion (Away))', // 357 Suck takes power-> 110 rises and attacks-> Qi cut
		{id: 350, msg: 'red-> sweet ring'}, // 350 Suck take power-> 302 sweet ring
		
		{id: 351, msg: 'Broken Shield !!'}, // Shield starts ringing
		{id: 401, msg: '30% '} // start
		
		// 105 連續攻擊
		// 106 迴旋砍擊x2
		// 107 憤怒一擊 / 神經劈擊
		// 113 ???
		// 115 瞬閃
		// 118 氣斬
		// 119 瞬閃 + 起身攻擊
		// 120 (右手蓄力)
		// 123 連續攻擊
		// 126 迴旋砍擊x4
		// 127 執念
		// 128 下巴粉碎
		// 129 (右手蓄力)
		// 131 重擊斬 + 迴旋砍擊x2
		// 132 ??? + 一刀兩斷
		// 133 瞬閃 + 氣斬
		// 137 一刀兩斷
		// 138 疾走
		// 150 跑步
		// 352 护盾[不使用]
		// 353 前跳[不使用]
		// 354 护盾破碎[不使用]
		// 360 Suck 收力量2
		// 361 Suck 收力量3
	],
	KQ_TipMsg : ["Identification (ready)!!"]
}
