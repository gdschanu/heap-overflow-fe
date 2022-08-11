export default {
    namespaced: true,
    state() {
        return {
            theme: "",
            language: "",
            alert: {
                isAlert: false,
                alertMessage: "",
                alertType: "",
            },
            // settingName: settingValue
            editorSettings: {},
        };
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme;
            localStorage.setItem("theme", theme);
        },
        setLanguage(state, language) {
            state.language = language;
            localStorage.setItem("lang", language);
        },
        setAlert(state, alert) {
            state.alert = alert;
        },
        setEditorSettings(state, editorSettings) {
            state.editorSettings = editorSettings;
        }
    },
    actions: {
        initTheme(state) {
            const currentTheme = localStorage.getItem("theme");
            if (!currentTheme) {
                state.commit("setTheme", "light-theme");
            } else {
                state.commit("setTheme", currentTheme);
            };
        },
        setTheme(state, theme) {
            state.commit("setTheme", theme);
            localStorage.setItem("theme", theme);
        },
        setLanguage(state, newLanguage) {
            const currentLanguage = localStorage.getItem("lang");
            if (!currentLanguage) {
                console.log(!currentLanguage);
                state.commit("setLanguage", "en");
            } else {
                if (newLanguage)
                    state.commit("setLanguage", newLanguage);
                else
                    state.commit("setLanguage", currentLanguage);
            }
        },
        setAlert(state, alert) {
            state.commit("setAlert", alert);
        },
        closeAlert(state) {
            state.commit("setAlert", {
                isAlert: false,
                alertMessage: state.state.alert.alertMessage,
                alertType: state.state.alert.alertType,
            });
        },
        setEditorSettings(state, editorSettings) {
            let settingsToSave = JSON.parse(localStorage.getItem("editorSettings"));
            if (!settingsToSave)
                settingsToSave = {}
            Object.keys(editorSettings).forEach(name => {
                settingsToSave[name] = editorSettings[name];
            });
            state.commit("setEditorSettings", settingsToSave);
            localStorage.setItem("editorSettings", JSON.stringify(settingsToSave));
        },
    },
    getters: {
    }
};