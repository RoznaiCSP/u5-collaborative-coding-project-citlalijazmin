// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010b090b010b010a090a010a010a010a03030303030303030303010a090a010a08080808080808080804030a010a010e02020202020202020205030a010a010a02020202020202020205030a0e0a010a02020202020202020205030a010a010a07070707070202020205030a010a010903030303030602020205030a010a010a010a010a030602020205030a010a010e010a0e0a030602020205030a090a010a090a010a030602020205030a010a010a010a010a030602020205030a010a010a010a090a030602020205030a010a090a010e010a030602020205030a0e0a010a010a010a030602020205030a010a010a0109010a030602020205030a090a010a`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile1,myTiles.tile2,sprites.builtin.forestTiles4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
