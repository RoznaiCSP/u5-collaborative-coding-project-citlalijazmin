// Don't forget to comment your code as you work!
let mySprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(11)
let mySprite2 = sprites.create(img`
    ........................
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff..........
    .ffefbf44fbfeff.........
    .fee41fddf14eef.........
    fdfeeddddd4eff..........
    fbffee444edd4e..........
    fbf4f2222edde...........
    fcf.f22cccee............
    .ff.f44cdc4f............
    ....fffddcff............
    .....fddcff.............
    ....cddc................
    ....cdc.................
    ....cc..................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
effects.confetti.startScreenEffect()
