function MediaPlayer(config)
{
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
};

MediaPlayer.prototype._initPlugins = function()
{
    this.plugins.forEach(plugin => 
        {
            plugin.run(this);
        });
};

MediaPlayer.prototype.play = function()
{
    this.media.play();
};

MediaPlayer.prototype.pause = function()
{
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function()
{
    this.media.paused
        ? this.play()
        : this.pause();
};

MediaPlayer.prototype.mute = function()
{
    this.media.muted = true;
};

MediaPlayer.prototype.toggleMute = function()
{
    this.media.muted = !this.media.muted;
};

export default MediaPlayer;