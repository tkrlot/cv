/**
 * @name SimpleStartUpChannel
 * @version 1.0
 * @description Always opens a specific server + channel on Discord startup.
 * @author You
 */

const { Webpack, UI } = BdApi;

module.exports = class SimpleStartUpChannel {
    start() {
        // IDs you requested
        const serverId = "823513696067256350";
        const channelId = "1035299793041358958";

        // Build the target path
        const targetPath = `/channels/${serverId}/${channelId}`;
        const currentPath = window.location.pathname;

        if (currentPath === targetPath) return;

        const transitionTo = Webpack.getByStrings(
            ["transitionTo - Transitioning to"],
            { searchExports: true }
        );

        try {
            if (transitionTo) {
                transitionTo(targetPath);
            } else {
                // fallback if transitionTo not found
                window.location.pathname = targetPath;
            }
        } catch (err) {
            UI.showToast("Failed to navigate to startup channel", { type: "error" });
        }
    }

    stop() {
        // nothing to clean up
    }
};
