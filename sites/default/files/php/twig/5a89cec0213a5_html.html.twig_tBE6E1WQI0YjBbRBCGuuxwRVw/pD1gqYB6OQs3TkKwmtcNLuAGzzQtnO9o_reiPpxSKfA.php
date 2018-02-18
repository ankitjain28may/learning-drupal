<?php

/* themes/bootstrap/templates/system/html.html.twig */
class __TwigTemplate_e1a9dbb34caa1c133cb544a7069db1587b57988d97401f143244d11a5c570367 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 48);
        $filters = array("clean_class" => 50, "raw" => 60, "safe_join" => 61, "t" => 67);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set'),
                array('clean_class', 'raw', 'safe_join', 't'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 48
        $context["body_classes"] = array(0 => ((        // line 49
($context["logged_in"] ?? null)) ? ("user-logged-in") : ("")), 1 => (( !        // line 50
($context["root_path"] ?? null)) ? ("path-frontpage") : (("path-" . \Drupal\Component\Utility\Html::getClass(($context["root_path"] ?? null))))), 2 => ((        // line 51
($context["node_type"] ?? null)) ? (("page-node-type-" . \Drupal\Component\Utility\Html::getClass(($context["node_type"] ?? null)))) : ("")), 3 => ((        // line 52
($context["db_offline"] ?? null)) ? ("db-offline") : ("")), 4 => (($this->getAttribute($this->getAttribute(        // line 53
($context["theme"] ?? null), "settings", array()), "navbar_position", array())) ? (("navbar-is-" . $this->getAttribute($this->getAttribute(($context["theme"] ?? null), "settings", array()), "navbar_position", array()))) : ("")), 5 => (($this->getAttribute(        // line 54
($context["theme"] ?? null), "has_glyphicons", array())) ? ("has-glyphicons") : ("")));
        // line 57
        echo "<!DOCTYPE html>
<html ";
        // line 58
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["html_attributes"] ?? null), "html", null, true));
        echo ">
  <head>
    <head-placeholder token=\"";
        // line 60
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["placeholder_token"] ?? null)));
        echo "\">
    <title>";
        // line 61
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->safeJoin($this->env, ($context["head_title"] ?? null), " | ")));
        echo "</title>
    <css-placeholder token=\"";
        // line 62
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["placeholder_token"] ?? null)));
        echo "\">
    <js-placeholder token=\"";
        // line 63
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["placeholder_token"] ?? null)));
        echo "\">
  </head>
  <body";
        // line 65
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => ($context["body_classes"] ?? null)), "method"), "html", null, true));
        echo ">
    <a href=\"#main-content\" class=\"visually-hidden focusable skip-link\">
      ";
        // line 67
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Skip to main content")));
        echo "
    </a>
    ";
        // line 69
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page_top"] ?? null), "html", null, true));
        echo "
    ";
        // line 70
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page"] ?? null), "html", null, true));
        echo "
    ";
        // line 71
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page_bottom"] ?? null), "html", null, true));
        echo "
    <js-bottom-placeholder token=\"";
        // line 72
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["placeholder_token"] ?? null)));
        echo "\">
  </body>
</html>
";
    }

    public function getTemplateName()
    {
        return "themes/bootstrap/templates/system/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  98 => 72,  94 => 71,  90 => 70,  86 => 69,  81 => 67,  76 => 65,  71 => 63,  67 => 62,  63 => 61,  59 => 60,  54 => 58,  51 => 57,  49 => 54,  48 => 53,  47 => 52,  46 => 51,  45 => 50,  44 => 49,  43 => 48,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/bootstrap/templates/system/html.html.twig", "/var/www/html/drupal/themes/bootstrap/templates/system/html.html.twig");
    }
}
