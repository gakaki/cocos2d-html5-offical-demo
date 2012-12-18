
var MyThirdApp = cc.LayerColor.extend(
{   _jetSprite:null,
	
    init:function(){
	    this._super();
	    
        this.setColor(new cc.Color4B(0,0,0,255));
        var size = cc.Director.getInstance().getWinSize();
		
        this._jetSprite = new JetSprite();
	    this.setTouchEnabled(true);
	    this.setKeyboardEnabled(true);
		this.setMouseEnabled(true);//文档里没有写哦
		
        this.setPosition(new cc.Point(0,0));
		
        this.addChild(this._jetSprite);
        this._jetSprite.setPosition(new cc.Point(size.width/2,size.height/2));
        this._jetSprite.scheduleUpdate();
        this.schedule(this.update);

        return true;
    },
    onEnter:function(){
        this._super();
    },
    update:function(dt){
    	
    },
    
   	onMouseDown:function (e){
       //console.log( e );
    },
    onMouseEntered:function (e){
       //console.log( e );
    },
    
    onMouseMoved:function (e){
     	//console.log( e );
     	this._jetSprite.handleTouchMove( e._point  );
    },

    
    onTouchsBegan:function (pTouch,pEvent){
       //console.log( pTouch,pEvent );
    },
    onTouchesEnded:function (pTouch,pEvent){
        this._jetSprite.handleTouch(pTouch[0].getLocation());
    },
    onTouchesMoved:function(pTouch,pEvent){
        this._jetSprite.handleTouchMove(pTouch[0].getLocation());
    },
    onKeyUp:function(e){

    },
    onKeyDown:function(e){
        this._jetSprite.handleKey(e);
    }
});



MyThirdAppScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer = new MyThirdApp();
		layer.init();
		this.addChild(layer);
	}
})