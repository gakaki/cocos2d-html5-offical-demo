var AnchorPointLayer = cc.Layer.extend(
{
    init:function()
    {
        var hello_world_sprite = cc.Sprite.create("./res/HelloWorld.png");
        hello_world_sprite.setAnchorPoint(cc.p(0, 0));
		
        this.addChild(hello_world_sprite);
        return true;
    }
});

AnchorPointScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer = new AnchorPointLayer();
		layer.init();
		this.addChild(layer);
	}
})
