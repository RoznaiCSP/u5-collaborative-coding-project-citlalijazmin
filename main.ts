sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("Hello  " + Name)
    pause(500)
    game.showLongText("Would you do a kind favor for me?", DialogLayout.Bottom)
    pause(500)
    game.showLongText("To retrive my lost treasure", DialogLayout.Bottom)
    pause(500)
    story.showPlayerChoices("Accept :)", "Decline :(")
    if (story.checkLastAnswer("Accept :)")) {
    	
    } else if (story.checkLastAnswer("Decline :(")) {
        game.over(false)
    }
})
let Name = ""
Name = game.askForString("Name your character")
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
Loid.setScale(2, ScaleAnchor.Right)
tiles.placeOnTile(Loid, tiles.getTileLocation(1, 3))
scene.cameraFollowSprite(Anya)
controller.moveSprite(Anya)
