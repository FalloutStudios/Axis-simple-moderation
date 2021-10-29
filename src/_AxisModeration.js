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
    - 'You''re so hot to stay here <a:flame:901325248413204510>'
    - 'Fly high! <a:5011kekwwa:901325243862360124>'
    - 'Good bye <a:sadsponge:901325244353093674>'
    - 'Talk to my ban hammer <a:blelele:901325242927054929>'
    - 'The ban hammer has spoken to your ass! <a:holysmokes:901325256634036305>'
kicked:
  title:
    - 'Kicked!'
    - 'POG got kicked'
    - 'I kicked some ass again!'
    - 'Kicked LUL'
  defaultReason: # %username% %author%
    - 'See you soon to get your ban :eyes:'
    - 'Go to your momma now! <a:peperun:901325248769703936>'
    - 'Kicked because you''re sus!'
    - 'Ayoo! got kicked <a:pepesword:901325250900402206>'
    - 'Kicked!'`;

module.exports = function() {
    this.get = (location) => {
        if(!Fs.existsSync(location)) Fs.writeFileSync(location, language);

        const content = Fs.readFileSync(location, 'utf8');
        return Yml.parse(content);
    }
}