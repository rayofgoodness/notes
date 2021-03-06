
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
    }),
    mutations: {
        SET_NOTES_FROM_LOCAL_STORE(state, payload) {
            state.notes = payload;
        },
        CREATE_NOTE(state, payload) {
            state.notes.push(payload);
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        ADD_NOTE_TO_NOTES(state, payload) {
            state.notes[state.notes.indexOf(state.notes.find(note => note.id === parseInt(payload.id)))] = payload;
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        REMOVE_NOTE_FROM_NOTES(state, payload) {
            state.notes = state.notes.filter(note => note.id !== payload);
            localStorage.setItem('notes', JSON.stringify(localStoreNotes.filter(note => note.id !== payload)));
        },
    },
    getters: {
        NOTES(state) {
            return state.notes
        },
        NOTE: (state) => (id) => {
            return state.notes.find(note => note.id === id)
        }
    },
};

export default Notes;
