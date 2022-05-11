
const localStoreNotes = JSON.parse(localStorage.getItem('notes'))

const Notes = {
    state: () => ({
        notes: [
            {
                id: 1,
                name: 'Note №1',
                data: [
                    {
                        checked: true,
                        description: 'Some text1'
                    },
                    {
                        checked: true,
                        description: 'Some text2'
                    },
                ],
            }
        ],
        note: {}
    }),
    mutations: {
        SET_NOTES_FROM_LOCAL_STORE(state, payload) {
            state.notes = payload;
        },
        CREATE_NOTE(state, payload) {
            state.notes.push(payload);
            localStorage.setItem('notes',JSON.stringify(state.notes));
        },
        ADD_NOTE_TO_NOTES(state, payload) {
            state.notes[state.notes.indexOf(state.notes.find(note => note.id === parseInt(payload.id)))] = payload;
            localStorage.setItem('notes',JSON.stringify(state.notes));
        },
        REMOVE_NOTE_FROM_NOTES(state, payload) {
            state.notes = state.notes.filter(n => n.id !== payload);
            localStorage.setItem('notes',JSON.stringify(localStoreNotes.filter(n => n.id !== payload)));
        },
        SET_NOTE_TO_STATE(state, payload) {
            state.note = payload;
        }
    },
    actions: {
        GET_NOTE_FROM_NOTES_STATE({state, commit}, payload) {
            let storedNote = state.notes.find(val => val.id === payload)
            commit('SET_NOTE_TO_STATE', storedNote)
        }
    },
    getters: {
        NOTES(state) {
            return state.notes
        },
        NOTE(state) {
            return state.note
        },
    },
};

export default Notes;
