controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (info.player2.hasLife()) {
        stellaStar = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . b 5 5 5 b . . . . . 
            . . . . . b b 5 5 5 b b . . . . 
            . . b b b b 5 5 5 1 1 b b b b . 
            . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b d d 5 5 5 5 5 d d b . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c 5 5 d d b d d 5 5 c . . 
            . . . c 5 d d c c c d d 5 c . . 
            . . . c c c c . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player2, 200, 0)
    }
})
// Function with parameters 
// 
function greet (firstname: string) {
    console.log(firstname)
    game.splash("Welcome traveler")
}
// Function with return value 
function aName (name: string) {
    return name
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("Hello  " + Name)
    pause(500)
    story.clearAllText()
    // Selection
    game.showLongText("Would you like to go on a quest?", DialogLayout.Bottom)
    pause(500)
    story.clearAllText()
    story.showPlayerChoices("ACCEPT", "DECLINE")
    // Iteration
    if (story.checkLastAnswer("ACCEPT")) {
        game.showLongText("Are you sure", DialogLayout.Bottom)
        story.showPlayerChoices("YES", "NO")
        pause(500)
        story.clearAllText()
        effects.clearParticles(traveler)
        effects.clearParticles(Yor)
        pause(500)
        story.clearAllText()
        game.splash("Press \"B\" to shoot")
        game.splash("Ready, GO!")
        story.clearAllText()
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`level2`)
        effects.starField.startScreenEffect(500)
        traveler = sprites.create(img`
            ................................
            ................................
            ........fffffffffffff...........
            .......f3333333333333f..........
            ..ffffff3333333333333ffffff.....
            ..feee53333333333333335eeef.....
            ..feeee333333333333333eeeef.....
            ..fee5313333333333333135eef.....
            ...fee33133131131333133eef......
            ...fe5333311311313133335ef......
            ....f3333333333333333333f.......
            ....f3333333333333333333f.......
            ....f3333fff3d3d3fff3333f.......
            ...ff333f161ddddd161f3333f......
            ...f333ff166ddddd661ff333f......
            ...f3333f167ddddd761f3333f......
            ..f333333d77ddddd77d333333f.....
            ..f333333eddddddddde333333f.....
            ..f33333338ddddddd83333333f.....
            ...f3f33333811111833333f3f......
            ....f.ff3388815188833ff.f.......
            ........f88881518888f...........
            .......f1888888888881f..........
            ......f1d18881518881d1f.........
            ......f118888888888811f.........
            .......ff81188888118ff..........
            ........f88888888888f...........
            .........f888888888f............
            ..........fffffffff.............
            ..........f11fff11f.............
            ................................
            ................................
            `, SpriteKind.Player)
        traveler.setPosition(20, 45)
        traveler.setFlag(SpriteFlag.StayInScreen, true)
        controller.player1.moveSprite(travelr, 200, 200)
        info.player1.setLife(4)
        info.player1.setScore(0)
        player2 = sprites.create(img`
            ................................
            ................................
            ...........b....................
            .........bb5bbbbbb..............
            ........b555555555bb............
            .......b555555555555b...........
            ......bb5515555555555b..........
            .....b511511555515151b..........
            ......b15515bbb5555511b.........
            ......b55b5b555b5555555b........
            .....b5555b5555b555555b.........
            ......b55bbbbbbbb5b555b.........
            ......b55fffddddbfff555b........
            ......b5b181ddddd181b5b.........
            ......b5b188ddddd881b5b.........
            .......b5189ddddd981b5b.........
            ........b33ddddddd33bb..........
            .........bddddddddddb...........
            .........11ddddddd11............
            .........f6111d1116f............
            .........f666121666f............
            ........f66666266666f...........
            ........f66666261166f...........
            .......f166666f666661f..........
            ......fdd16666666661ddf.........
            ......fddf6666f6666fddf.........
            .......fff666f6f666fff..........
            .........f66f6f6f66f............
            .........f6f66f66f6f............
            ..........f666f666f.............
            ..........f666f666f.............
            ..........fffffffff.............
            `, SpriteKind.Player)
        player2.setPosition(20, 105)
        player2.setFlag(SpriteFlag.StayInScreen, true)
        controller.player2.moveSprite(player2, 200, 200)
        info.player2.setLife(4)
        info.player2.setScore(0)
    } else if (story.checkLastAnswer("DECLINED")) {
        game.setGameOverMessage(false, "GAME OVER!")
    }
})
info.player1.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(info.player1.hasLife())) {
        game.showLongText("Player 1 Wins!", DialogLayout.Bottom)
        game.over(true, effects.confetti)
    } else {
        game.showLongText("Player 1 is out :-(", DialogLayout.Bottom)
        traveler.destroy()
    }
})
info.player2.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    // Conditional Statements
    if (!(info.player2.hasLife())) {
        game.showLongText("Player 2 Wins!", DialogLayout.Bottom)
        game.over(true, effects.confetti)
    } else {
        game.showLongText("Player 2 is out :-(", DialogLayout.Bottom)
        player2.destroy()
    }
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (info.player1.hasLife()) {
        stellaStar = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . b 5 5 5 b . . . . . 
            . . . . . b b 5 5 5 b b . . . . 
            . . b b b b 5 5 5 1 1 b b b b . 
            . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b d d 5 5 5 5 5 d d b . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c 5 5 d d b d d 5 5 c . . 
            . . . c 5 d d c c c d d 5 c . . 
            . . . c c c c . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, travelr, 200, 0)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
    lightningBolts.destroy(effects.bubbles, 500)
})
let lightningBolts: Sprite = null
let travelr: Sprite = null
let traveler: Sprite = null
let player2: Sprite = null
let stellaStar: Sprite = null
let Yor: Sprite = null
let Name = ""
// User input
Name = game.askForString("Name your character")
// User output
greet("Hello")
let mySprite = aName("traveler")
tiles.setCurrentTilemap(tilemap`level1`)
let Anya = sprites.create(img`
    ......fffffffffffff..........
    .....f3333333333333f.........
    ffffff3333333333333ffffff....
    feee53333333333333335eeef....
    feeee333333333333333eeeef....
    fee5313333333333333135eef....
    .fee33133131131333133eef.....
    .fe5333311311313133335ef.....
    ..f3333333333333333333f......
    ..f3333333333333333333f......
    ..f33333f3333333f33333f......
    ..f3333fff3d3d3fff3333f......
    .ff333f161ddddd161f3333f.....
    .f333ff166ddddd661ff333f.....
    .f3333f167ddddd761f3333f.....
    f333333d77ddddd77d333333f....
    f333333eddddddddde333333f....
    f33333338ddddddd83333333f....
    .f3f33333811111833333f3f.....
    ..f.ff3388815188833ff.f......
    ......f38888888883f..........
    ......f88881518888f..........
    .....f1888888888881f.........
    ....f1d18881518881d1f........
    ....f118888888888811f........
    .....ff81188888118ff.........
    ......f88888888888f..........
    .......f888888888f...........
    ........fffffffff............
    ........f11fff11f............
    ........fffffffff............
    `, SpriteKind.Player)
Anya.setScale(1, ScaleAnchor.Right)
tiles.placeOnTile(Anya, tiles.getTileLocation(7, 15))
Yor = sprites.create(img`
    .............................
    .........fffffff.............
    .......fffffffffff...........
    ......fff1111111fff..........
    .....fff111111111fff.........
    .....ff11fffffff11ff.........
    ....fff1fffffffff1fff........
    ....ff1fffffffffff1ff........
    ....ff1fffffffffff1ff........
    ....f1fffffffffffff1f........
    ...ff1ffcfffffffcff1ff.......
    ...ffffcccfffdfcccffff.......
    ...fffc121dffdd121cfff.......
    ...f5cc122ddddd221cc5f.......
    ....ffc12fdddddf21cff........
    .....ffdffdddddffdff.........
    .....ff33ddddddd33ff.........
    .....fffdddddddddfff.........
    .....ffffdddddddffff.........
    .....fffdd2ddd2ddfff.........
    .....fffd2222222dfff.........
    ......cf222222222fc..........
    .....c2222222222222c.........
    ....cdd22222222222ddc........
    ....cdd22222222222ddc........
    .....cc22222222222cc.........
    ......c22222222222c..........
    .......c222222222c...........
    ........cfffffffc............
    ........cdddcdddc............
    ........ccccccccc............
    `, SpriteKind.Player)
Yor.setScale(1.5, ScaleAnchor.Right)
tiles.placeOnTile(Yor, tiles.getTileLocation(1, 3))
scene.cameraFollowSprite(Anya)
controller.moveSprite(Anya)
game.onUpdateInterval(500, function () {
    // Boolean Operators
    if (story.checkLastAnswer("YES")) {
        lightningBolts = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 f . . . . . 
            . . . f 1 1 1 1 1 f . . . . . . 
            . . f 1 1 1 1 1 f f f . . . . . 
            . . f 1 1 1 1 1 1 1 1 f . . . . 
            . f 1 1 1 1 1 1 1 1 f . . . . . 
            . . f f f f 1 1 1 f . . . . . . 
            . . . . f 1 1 1 f . . . . . . . 
            . . . . f 1 1 f . . . . . . . . 
            . . . f 1 1 f . . . . . . . . . 
            . . . f 1 f . . . . . . . . . . 
            . . . . f . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        lightningBolts.setVelocity(-50, 0)
        lightningBolts.setPosition(160, randint(0, 120))
    } else if (story.checkLastAnswer("NO")) {
        game.over(false)
    }
})
