/* eslint-disable no-magic-numbers */
import * as Phaser from 'phaser';

export class ForgeScene extends Phaser.Scene {
    private backgroundKey = 'background-image'; // * Store the background image name
    private backgroundImage: Phaser.GameObjects.Image; // * Reference for the background image

    constructor() {
        super({ key: 'preloader' });
    }

    async preload() {
        try {
            console.log('forge.scene.ts', 'Preloading Assets...');
            // * First, set the base URL since we're just loading from the main application's asset folder
            this.load.setBaseURL('http://localhost:4200/');
        } catch (e) {
            console.error('preloader.scene.ts', 'error preloading', e);
        }
    }

    /**
     * * Phaser will only call create after all assets in Preload have been loaded
     */
    async create() {
        console.log('forge.scene.ts', 'Creating Assets...', this.scale.width, this.scale.height);

        // * Setup the Background Image
        this.backgroundImage = this.add.image(0, 0, this.backgroundKey);

        // * Now handle scrolling
        this.cameras.main.setBackgroundColor('0xEBF0F3');

        // * Set cameras to the correct position
        this.cameras.main.setZoom(0.25);

        this.scale.on('resize', this.resize, this);
    }

    /**
     * * When the screen is resized, we
     *
     * @param gameSize
     */
    resize(gameSize: Phaser.Structs.Size) {
        console.log('Resizing', gameSize.width, gameSize.height);
        this.cameras.resize(gameSize.width, gameSize.height);
    }
}
