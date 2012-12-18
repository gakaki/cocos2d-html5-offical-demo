var PivotTopLeft = cc.Layer.extend(
{
    init:function()
    {
        var layer1 = cc.LayerColor.create(
            new cc.Color4B(128, 128, 128, 255), 300, 300),
        	jetSprite = cc.Sprite.create("./images/JetPivotTL.png"),
        	rotationAmount;
		
        layer1.setPosition(new cc.Point(0,0));
        jetSprite.setAnchorPoint(new cc.Point(0,0));
        jetSprite.setPosition(new cc.Point(150-(jetSprite.getContentSize().width/2),150+(jetSprite.getContentSize().height/2)));

        layer1.addChild(jetSprite);

        rotationAmount = 0;
/*
        jetSprite.schedule(function()
            {
                this.setRotation(rotationAmount++);
                if(rotationAmount > 360)
                    rotationAmount = 0;
            });*/

        this.addChild(layer1);
        return true;
    }
});


PivotTopLeftScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer = new PivotTopLeft();
		layer.init();
		this.addChild(layer);
	}
})
