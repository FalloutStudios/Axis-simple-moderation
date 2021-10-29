const Fs = require('fs');
const Yml = require('yaml');

const language = `# Axis moderation language
banned:
  title:
    - 'Banned!'
    - 'The ban hammer has spoken!'
    - 'Talk to my ban hammer!'
    - 'You''re now banned!'
    - 'Ban! Ban!'
  defaultReason: # %username% %author%
    - 'You''re so hot to stay here'
    - 'Fly high!'
    - 'Good bye :wave:'
    - 'Talk to my ban hammer!'
    - 'The ban hammer has spoken to your ass!'
kicked:
  title:
    - 'Kicked!'
    - 'POG got kicked'
    - 'I kicked some ass again!'
    - 'Kicked LUL'
  defaultReason: # %username% %author%
    - 'See you soon to get your ban :eyes:'
    - 'Go to your momma now!'
    - 'Kicked because you''re sus!'
    - 'Ayoo! got kicked'
    - 'Kicked!'`;

module.exports = function() {
    this.get = (location) => {
        if(!Fs.existsSync(location)) Fs.writeFileSync(location, language);

        const content = Fs.readFileSync(location, 'utf8');
        return Yml.parse(content);
    }
}