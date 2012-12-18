var PivotCenter = cc.Layer.extend(
{
    init:function()
    {
        var layer1 = cc.LayerColor.create(
            new cc.Color4B(128, 128, 128, 255), 300, 300);
            
        var jetSprite = cc.Sprite.create("./images/JetPivot.png");

        jetSprite.setPosition(new cc.Point(150,150));
        layer1.setPosition(new cc.Point(0,0));
        layer1.addChild(jetSprite);

        var rotationAmount = 0;
        jetSprite.schedule(function()
            {

                this.setRotation(rotationAmount++);
                if(rotationAmount > 360)
                    rotationAmount = 0;
            });
        this.addChild(layer1);
        return true;
    }
});


PivotCenterScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer = new PivotCenter();
		layer.init();
		this.addChild(layer);
	}
})
/*
PivotCenter.node = function() {
    var pRet = new PivotCenter();

    if(pRet && pRet.init()){
        return pRet;
    }
    return null;
}*/