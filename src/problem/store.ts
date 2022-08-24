import { Module } from 'vuex'
import Problem from './model/problem';
import ProgrammingLanguage from './model/programmingLanguage';
import Submission from './model/submission';
const date = new Date();

type ProblemCode = {
	id: string,
	code: string,
}

type EditorSetting = {
	[key: string]: any
	fontSize: string,
	fontFamily: string,
	fontWeight: string,
	lineHeight: number,
	wordWrap: boolean,
	lineNumbers: boolean,
	scrollBeyondLastLine: boolean,
	folding: boolean,
	foldingHighlight: boolean,
	tabCompletion: string,
	automaticLayout: boolean,
	cursorBlinking: string,
	language: ProgrammingLanguage
}

type EditorSettingKey = keyof EditorSetting

export default {
	namespaced: true,
	state: {
		currentProblemCode: {},
		editorSettings: {},
		problem: {},
		submission: null
	} as {
		currentProblemCode: ProblemCode,
		editorSettings: EditorSetting,
		problem: Problem,
		submission: Submission | null
	},
	mutations: {
		setCurrentProblemCode(state, currentProblem: ProblemCode) {
			state.currentProblemCode = currentProblem;
		},
		setEditorSettings(state, editorSettings: EditorSetting) {
			state.editorSettings = editorSettings;
		},
		setProblem(state, problem: Problem) {
			state.problem = problem
		},
		setSubmission(state, submission: Submission) {
			state.submission = submission
		}
	},
	actions: {
		setCurrentProblemCode(state, currentProblem: ProblemCode) {
			state.commit("setCurrentProblemCode", currentProblem);
			localStorage.setItem(`problemID: ${currentProblem.id}`, JSON.stringify({
				code: currentProblem.code,
				expiredAt: date.getTime() + 1000 * 60 * 60 * 24 * 30,
			}));
		},
		setEditorSettings(state, editorSettings: EditorSetting) {
			const currentSetting = localStorage.getItem("editorSettings")

			if (currentSetting !== null) {
				let settingsToSave = JSON.parse(currentSetting) as EditorSetting;
				Object.keys(editorSettings).forEach((name) => {
					settingsToSave[name as EditorSettingKey] = editorSettings[name as EditorSettingKey]
				});
				state.commit("setEditorSettings", settingsToSave);
				localStorage.setItem("editorSettings", JSON.stringify(settingsToSave));
			} else {
				let settingsToSave: EditorSetting
				settingsToSave = editorSettings;
				state.commit("setEditorSettings", settingsToSave);
				localStorage.setItem("editorSettings", JSON.stringify(settingsToSave));
			}
		},
		setProblem(state, problem: Problem) {
			state.commit("setProblem", problem)
		},
		setSubmission(state, submission: Submission) {
			state.commit("setSubmission", submission)
		}
	},
} as Module<any, any>

export { ProblemCode }
export { EditorSetting }
export { EditorSettingKey }
