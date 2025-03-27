let width, height, startBtn, mContext;

export class Menu extends Phaser.Scene {
    constructor ()
    {
        super('Menu');
    }

    create ()
    {
        mContext = this;

        startBtn.on('pointerdown', function(){
            startBtn.setScale(.75);
            setTimeout(() => {
                mContext.scene.start('Game');
            }, 350);
        });

        startBtn.on('pointerout', () => {            
            startBtn.setScale(.85); 
        });
    }

    init(){
        width = this.game.config.width;
        height = this.game.config.height;
         
        this.add.image(0, 0, 'background').setOrigin(0);
        this.add.image((width/2), 150, 'logo').setOrigin(.5, 0);
        startBtn = this.add.image(((this.game.config.width)/2), (this.game.config.height) - 180, 'play').setScale(.85).setInteractive();
    }
} 