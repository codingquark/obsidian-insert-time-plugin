import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class InsertTime extends Plugin {
    async onload() {
        // This adds an editor command that can perform some operation on the current editor instance
        this.addCommand({
            id: 'sample-editor-command',
            name: 'Sample editor command',
            editorCallback: (editor, _) => {
                const cursor = editor.getCursor();

                const now = new Date();
                const timeString = now.toTimeString().split(' ')[0].slice(0, 5);

                editor.replaceRange(timeString, cursor);
                editor.setCursor({ line: cursor.line, ch: cursor.ch + 5 });
            }
        });
    }

    onunload() {

    }
}
