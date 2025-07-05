import React from 'react';
import { Shield, Users, BarChart3, Settings, LogOut, Database, Mail, MessageCircle } from 'lucide-react';

interface AdminPanelProps {
  onLogout: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminLoginTime');
    onLogout();
  };

  const adminStats = [
    { label: 'Usuários Ativos', value: '1,247', icon: Users, color: 'bg-blue-500' },
    { label: 'Conversas Hoje', value: '89', icon: MessageCircle, color: 'bg-green-500' },
    { label: 'Leads Gerados', value: '156', icon: Mail, color: 'bg-purple-500' },
    { label: 'Taxa Conversão', value: '12.4%', icon: BarChart3, color: 'bg-orange-500' }
  ];

  const quickActions = [
    { label: 'Gerenciar Usuários', icon: Users, action: () => console.log('Gerenciar usuários') },
    { label: 'Relatórios', icon: BarChart3, action: () => console.log('Relatórios') },
    { label: 'Configurações', icon: Settings, action: () => console.log('Configurações') },
    { label: 'Backup Dados', icon: Database, action: () => console.log('Backup') }
  ];

  return (
    <div className="fixed inset-0 bg-gray-100 z-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 rounded-xl">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Painel Administrativo</h1>
                <p className="text-sm text-gray-600">Exército de Agentes</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {adminStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Ações Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <div className="p-2 bg-gray-100 rounded-lg">
                  <action.icon className="h-5 w-5 text-gray-600" />
                </div>
                <span className="font-medium text-gray-900">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Atividade Recente</h2>
          <div className="space-y-4">
            {[
              { time: '10:30', action: 'Novo usuário cadastrado', user: 'João Silva' },
              { time: '10:15', action: 'Conversa iniciada no EssencialBot', user: 'Maria Santos' },
              { time: '09:45', action: 'Lead gerado via formulário', user: 'Pedro Costa' },
              { time: '09:30', action: 'Consulta contábil realizada', user: 'Ana Oliveira' },
              { time: '09:15', action: 'Acesso ao painel admin', user: 'Administrador' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500 font-mono">{activity.time}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-600">{activity.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;