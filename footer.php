<div class="contenedor-footer">
    <div class="footer-section">
        <nav class="footer-nav">
            <div class="contenedor-canal-footer">
                <?php

                if (!isset($canales)) {
                    $canales = getCanales(IDAMBITO);
                }


                foreach ($canales as $canal) {
                    // if($canal->idCanal == '6'){
                        foreach ($canal->subcanales as $subcanal) {
                            echo '<a href="' . str_replace("amp.","www.", $urlServer) . '/seccion/' . $subcanal->idSubcanal . '/' . slugify($subcanal->nombreSubCanal) . '" class="item-canal" target="_blank">' . $subcanal->nombreSubCanal . '</a>';
                        }
                    // }
                }
                ?>
            </div>
        </nav>
        <nav class="footer-mas-info">
            <a href="<?php echo FACEBOOK ?>" target="_blank">
                <h4 class="item">
                    <amp-img class="icon" layout="responsive" width="48" height="48"
                             src="/assets/images/facebook-icon.svg"></amp-img>
                </h4>
            </a>
            <a href="<?php echo TWITTER ?>" target="_blank">
                <h4 class="item">
                    <amp-img class="icon" layout="responsive" width="48" height="48"
                             src="/assets/images/twitter-icon.svg"></amp-img>
                </h4>
            </a>
            <a href="<?php echo YOUTUBE ?>" target="_blank">
                <h4 class="item">
                    <amp-img class="icon" layout="responsive" width="48" height="48"
                             src="/assets/images/yt-icon.svg"></amp-img>
                </h4>
            </a>
<!--            <a href="footer?.insta[0]" target="_blank">-->
<!--                <h4 class="item">-->
<!--                    <amp-img class="icon" layout="responsive" width="48" height="48"-->
<!--                             src="/assets/images/insta-icon.svg"></amp-img>-->
<!--                </h4>-->
<!--            </a>-->
<!--            <a href="footer?.telegram[0]" target="_blank">-->
<!--                <h4 class="item">-->
<!--                    <amp-img class="icon" layout="responsive" width="48" height="48"-->
<!--                             src="/assets/images/telegram-icon.svg"></amp-img>-->
<!--                </h4>-->
<!--            </a>-->
<!--            <a href="footer?.shop[0]" target="_blank">-->
<!--                <h4 class="item">-->
<!--                    <amp-img class="icon" layout="responsive" width="48" height="48"-->
<!--                             src="/assets/images/shop-icon.svg"></amp-img>-->
<!--                </h4>-->
<!--            </a>-->
        </nav>
        <nav class="footer-mas-info politicas">
            <a class="item-canal" href="https://www.tribunagrupo.com/#contacto" target="_blank">
                Contacto
            </a>
            <a class="item-canal" href="<?php echo str_replace("amp.","www.", $urlServer); ?>/politicas/privacidad.php" target="_blank">
                Política de Privacidad
            </a>
            <a class="item-canal" href="<?php echo str_replace("amp.","www.", $urlServer); ?>/politicas/avisolegal.php" target="_blank">
                Aviso Legal
            </a>
            <a class="item-canal" href="<?php echo str_replace("amp.","www.", $urlServer); ?>/politicas/cookies.php" target="_blank">
                Política de Cookies
            </a>
        </nav>
    </div>
</div>

<?php

include 'includes/analytics.php';

?>

<amp-script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></amp-script>
