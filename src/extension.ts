import * as vscode from "vscode"

function setFontWeight(weight: string, includeTerminal: boolean) {
	const editorConfig = vscode.workspace.getConfiguration("editor")
	const terminalConfig = vscode.workspace.getConfiguration("terminal")
	const currentFontWeight = editorConfig.get("fontWeight")
	if (currentFontWeight === weight) {
		return
	}

	editorConfig.update("fontWeight", weight, vscode.ConfigurationTarget.Global).then(
		() => {},
		(error) => {
			vscode.window.showErrorMessage(`Failed to change font weight: ${error}`)
		}
	)

	if (includeTerminal) {
		terminalConfig.update("integrated.fontWeight", weight, vscode.ConfigurationTarget.Global).then(
			() => {},
			(error) => {
				vscode.window.showErrorMessage(`Failed to change Terminal font weight: ${error}`)
			}
		)
	}
}

function setConfig() {
	const currentThemeType = vscode.window.activeColorTheme.kind
	const extensionConfig = vscode.workspace.getConfiguration("autoFontWeightSwitcher")

	const settings = {
		1: extensionConfig.get("lightWeight"),
		2: extensionConfig.get("darkWeight"),
		3: extensionConfig.get("darkHighContrastWeight"),
		4: extensionConfig.get("lightHighContrastWeight"),
	}
	setFontWeight(settings[currentThemeType], extensionConfig.get("includeTerminal"))
}

export function activate() {
	// Init
	setConfig()

	// Listen for theme change events
	vscode.window.onDidChangeActiveColorTheme(() => {
		setConfig()
	})

	// Listen for settings change events
	vscode.workspace.onDidChangeConfiguration((event) => {
		if (event.affectsConfiguration("autoFontWeightSwitcher")) {
			setConfig()
		}
	})
}

export function deactivate() {}
