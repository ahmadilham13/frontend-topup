import 'pace-js';
import 'pace-js/themes/blue/pace-theme-flash.css'; // Anda bisa mengganti tema sesuai keinginan

export default () => {
    if (process.client) {
        Pace.options = {
            ajax: true,
        };
        Pace.start();
    }
}