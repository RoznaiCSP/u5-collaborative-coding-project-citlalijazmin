sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.showLongText("Hello  " + Name, DialogLayout.Top)
    pause(200)
    game.showLongText("Would you do a favor for me?", DialogLayout.Bottom)
    pause(200)
    game.showLongText("Gettin my treasure back", DialogLayout.Bottom)
    pause(200)
    story.showPlayerChoices("Accept", "Decline")
    if (story.checkLastAnswer("Accept")) {
    	
    } else if (story.checkLastAnswer("Decline")) {
        game.over(false)
    }
})
let Name = ""
Name = game.askForString("Name your character ")
tiles.setCurrentTilemap(tilemap`level1`)
let Anya = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Anya.setScale(2, ScaleAnchor.Right)
tiles.placeOnTile(Anya, tiles.getTileLocation(7, 15))
let Loid = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
Loid.setScale(2, ScaleAnchor.Middle)
tiles.placeOnTile(Loid, tiles.getTileLocation(1, 3))
scene.cameraFollowSprite(Anya)
controller.moveSprite(Anya)
